<?php

namespace Tests\Unit\Services\Company\Team;

use Tests\TestCase;
use App\Models\Company\Team;
use App\Jobs\Logs\LogTeamAudit;
use App\Models\Company\Employee;
use App\Jobs\Logs\LogAccountAudit;
use Illuminate\Support\Facades\Queue;
use App\Services\Company\Team\UnsetTeamLeader;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class UnsetTeamLeaderTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function it_resets_a_team_leader() : void
    {
        Queue::fake();

        $michael = factory(Employee::class)->create([]);
        $team = factory(Team::class)->create([
            'company_id' => $michael->company_id,
        ]);

        $request = [
            'company_id' => $michael->company_id,
            'author_id' => $michael->user_id,
            'team_id' => $team->id,
        ];

        $team = (new UnsetTeamLeader)->execute($request);

        $this->assertDatabaseHas('teams', [
            'id' => $team->id,
            'team_leader_id' => null,
        ]);

        $this->assertInstanceOf(
            Team::class,
            $team
        );

        Queue::assertPushed(LogAccountAudit::class, function ($job) use ($michael, $team) {
            return $job->auditLog['action'] === 'team_leader_removed' &&
                $job->auditLog['objects'] === json_encode([
                    'author_id' => $michael->user->id,
                    'author_name' => $michael->user->name,
                    'team_leader_id' => $team->leader->id,
                    'team_leader_name' => $team->leader->name,
                ]);
        });

        Queue::assertPushed(LogTeamAudit::class, function ($job) use ($michael, $team) {
            return $job->auditLog['action'] === 'team_leader_removed' &&
                $job->auditLog['objects'] === json_encode([
                    'author_id' => $michael->user->id,
                    'author_name' => $michael->user->name,
                    'team_leader_id' => $team->leader->id,
                    'team_leader_name' => $team->leader->name,
                ]);
        });
    }

    /** @test */
    public function it_fails_if_wrong_parameters_are_given() : void
    {
        $michael = factory(Employee::class)->create([]);

        $request = [
            'company_id' => $michael->company_id,
            'author_id' => $michael->user_id,
        ];

        $this->expectException(ValidationException::class);
        (new UnsetTeamLeader)->execute($request);
    }
}