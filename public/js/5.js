(window.webpackJsonp=window.webpackJsonp||[]).push([[5,27],{"+b2T":function(e,t,a){var s=a("LpCw");"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,r);s.locals&&(e.exports=s.locals)},"+upi":function(e,t,a){"use strict";var s=a("o0ue");a.n(s).a},"0d+L":function(e,t,a){"use strict";a.r(t);var s=a("3QM4"),r=a("Z84v"),i=a("rrJu"),n={components:{TextArea:s.a,LoadingButton:r.a,Errors:i.a},props:{team:{type:Object,default:null},userBelongsToTheTeam:{type:Boolean,default:!1}},data:function(){return{editMode:!1,form:{description:null,errors:[]},loadingState:"",updatedTeam:null}},created:function(){this.updatedTeam=this.team,this.form.description=this.team.raw_description},methods:{showEditMode:function(){var e=this;this.editMode=!0,this.$nextTick((function(){e.$refs.description.focus()}))},submit:function(){var e=this;this.loadingState="loading",axios.post("/"+this.$page.auth.company.id+"/teams/"+this.team.id+"/description",this.form).then((function(t){e.$snotify.success(e.$t("team.description_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),e.updatedTeam=t.data.data,e.form.description=e.updatedTeam.raw_description,e.editMode=!1,e.loadingState=null})).catch((function(t){e.loadingState=null,e.form.errors=_.flatten(_.toArray(t.response.data))}))},teamMemberOrAtLeastHR:function(){return this.$page.auth.employee.permission_level<=200||0!=this.userBelongsToTheTeam}}},o=a("KHd+"),l=Object(o.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.updatedTeam.parsed_description&&!e.editMode,expression:"updatedTeam.parsed_description && !editMode"}],staticClass:"bb bb-gray"},[a("div",{staticClass:"lh-copy ma0 pl3 pt3 pr3 parsed-content",class:{mb3:!e.teamMemberOrAtLeastHR()},domProps:{innerHTML:e._s(e.updatedTeam.parsed_description)}}),e._v(" "),e.teamMemberOrAtLeastHR()?a("p",{staticClass:"pl3 pb3 pr3 f6 mb0"},[a("a",{staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer",attrs:{"data-cy":"team-description-edit"},on:{click:function(t){return t.preventDefault(),e.showEditMode()}}},[e._v(e._s(e.$t("app.edit")))])]):e._e()]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.updatedTeam.parsed_description&&!e.editMode,expression:"!updatedTeam.parsed_description && !editMode"}],staticClass:"lh-copy ma0 pa3 bb bb-gray"},[e.teamMemberOrAtLeastHR()?a("a",{staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer",attrs:{"data-cy":"add-description-blank-state"},on:{click:function(t){return t.preventDefault(),e.showEditMode()}}},[e._v(e._s(e.$t("team.description_cta")))]):e._e(),e._v(" "),e.teamMemberOrAtLeastHR()?e._e():a("span",{staticClass:"f6"},[e._v("\n      "+e._s(e.$t("team.description_blank"))+"\n    ")])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.editMode,expression:"editMode"}],staticClass:"pa3 bb bb-gray"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[e.form.errors.length>0?[a("div",{staticClass:"cf pb1 w-100 mb2"},[a("errors",{attrs:{errors:e.form.errors}})],1)]:e._e(),e._v(" "),a("text-area",{ref:"description",attrs:{label:e.$t("team.description_title"),datacy:"team-description-textarea",required:!0,rows:10,help:e.$t("team.description_help")},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}}),e._v(" "),a("div",{staticClass:"mb0"},[a("div",{staticClass:"flex-ns justify-between"},[a("div",[a("a",{staticClass:"btn dib tc w-auto-ns w-100 mb2 pv2 ph3",on:{click:function(t){t.preventDefault(),e.editMode=!1}}},[e._v("\n              "+e._s(e.$t("app.cancel"))+"\n            ")])]),e._v(" "),a("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 mb2 pv2 ph3",state:e.loadingState,text:e.$t("app.publish"),"cypress-selector":"team-description-submit-description-button"}})],1)])],2)])])}),[],!1,null,"a27232cc",null);t.default=l.exports},"2qaM":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".useful-link[data-v-00d10490] {\n  top: 6px;\n}\n.team-title[data-v-00d10490] {\n  background-color: #2E3748;\n  color: #fff;\n  border-top-right-radius: 6px;\n  border-top-left-radius: 6px;\n}\n.news-information img[data-v-00d10490] {\n  top: 7px;\n  width: 23px;\n}",""])},"3QM4":function(e,t,a){"use strict";var s={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-area-".concat(this._uid)}},type:{type:String,default:"text"},value:{type:String,default:""},datacy:{type:String,default:""},label:{type:String,default:""},help:{type:String,default:""},required:{type:Boolean,default:!1},rows:{type:Number,default:3},errors:{type:Array,default:function(){return[]}}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(e,t){this.$refs.input.setSelectionRange(e,t)}}},r=(a("Ed6m"),a("KHd+")),i=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mb3"},[e.label?a("label",{staticClass:"db fw4 lh-copy f6",attrs:{for:e.id}},[e._v("\n    "+e._s(e.label)+"\n  ")]):e._e(),e._v(" "),a("textarea",e._b({ref:"input",staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",class:{error:e.errors.length},attrs:{id:e.id,required:e.required?"required":"",type:e.type,"data-cy":e.datacy,rows:e.rows},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}},"textarea",e.$attrs,!1)),e._v(" "),e.errors.length?a("div",{staticClass:"error-explanation pa3 ba br3 mt1"},[e._v("\n    "+e._s(e.errors[0])+"\n  ")]):e._e(),e._v(" "),e.help?a("p",{staticClass:"f7 mb3 lh-title"},[e._v("\n    "+e._s(e.help)+"\n  ")]):e._e()])}),[],!1,null,"662de141",null);t.a=i.exports},"8/4d":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".error-explanation[data-v-662de141] {\n  background-color: #fde0de;\n  border-color: #e2aba7;\n}\n.error[data-v-662de141]:focus {\n  box-shadow: 0 0 0 1px #fff9f8;\n}",""])},Ed6m:function(e,t,a){"use strict";var s=a("rVr5");a.n(s).a},Eswu:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".error-explanation[data-v-df38947a] {\n  background-color: #fde0de;\n  border-color: #e2aba7;\n}\n.error[data-v-df38947a]:focus {\n  box-shadow: 0 0 0 1px #fff9f8;\n}\n.optional-badge[data-v-df38947a] {\n  border-radius: 4px;\n  color: #283e59;\n  background-color: #edf2f9;\n  padding: 3px 4px;\n}",""])},FUPM:function(e,t,a){var s=a("GqqJ");"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,r);s.locals&&(e.exports=s.locals)},GLrx:function(e,t,a){"use strict";var s=a("Hao9");a.n(s).a},GqqJ:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".border-red[data-v-1482dffa] {\n  background-color: #fff5f5;\n  border-color: #fc8181;\n  color: #c53030;\n}",""])},Gwnh:function(e,t,a){"use strict";a.r(t);var s=a("rrJu"),r=a("nyzR"),i=(a("zHN7"),a("mM8D")),n=a("IQOQ"),o=a.n(n),l={components:{Errors:s.a,IconDelete:r.a,BallPulseLoader:i.a},directives:{clickOutside:o.a.directive},props:{team:{type:Object,default:null},userBelongsToTheTeam:{type:Boolean,default:!1}},data:function(){return{processingSearch:!1,hasMadeASearch:!1,editMode:!1,removeMode:!1,removalConfirmation:!1,potentialTeamLeads:[],form:{employeeId:0,searchTerm:null,errors:[]},updatedTeam:null}},created:function(){this.updatedTeam=this.team},methods:{displaySearch:function(){var e=this;this.editMode=!0,this.$nextTick((function(){e.$refs.search.focus()}))},hideRemovalMode:function(){this.removeMode=!1},search:_.debounce((function(){var e=this;""!=this.form.searchTerm&&(this.hasMadeASearch=!1,this.processingSearch=!0,axios.post("/"+this.$page.auth.company.id+"/teams/"+this.team.id+"/lead/search",this.form).then((function(t){e.potentialTeamLeads=t.data.data,e.processingSearch=!1,e.hasMadeASearch=!0})).catch((function(t){e.form.errors=_.flatten(_.toArray(t.response.data)),e.processingSearch=!1,e.hasMadeASearch=!1})))}),500),assign:function(e){var t=this;this.form.employeeId=e.id,axios.post("/"+this.$page.auth.company.id+"/teams/"+this.team.id+"/lead",this.form).then((function(e){t.$snotify.success(t.$t("team.team_lead_added"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.updatedTeam.team_leader=e.data.data,t.editMode=!1,t.$root.$emit("leadSet",e.data.data)})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},atLeastHR:function(){return this.$page.auth.employee.permission_level<=200},removeTeamLead:function(){var e=this;axios.delete("/"+this.$page.auth.company.id+"/teams/"+this.team.id+"/lead/"+this.updatedTeam.team_leader.id).then((function(t){e.$snotify.success(e.$t("team.team_lead_removed"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),e.updatedTeam.team_leader=null,e.removeMode=!1})).catch((function(t){e.form.errors=_.flatten(_.toArray(t.response.data))}))}}},d=(a("zrnk"),a("KHd+")),c=Object(d.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.updatedTeam.team_leader?[a("div",{staticClass:"lh-copy ma0 pa3 bb bb-gray"},[a("p",{staticClass:"silver f6 ma0 mb1"},[e._v(e._s(e.$t("team.team_lead_label")))]),e._v(" "),a("span",{staticClass:"pl3 db team-lead relative"},[a("img",{staticClass:"br-100 absolute avatar",attrs:{src:e.updatedTeam.team_leader.avatar}}),e._v(" "),a("inertia-link",{staticClass:"mb2",attrs:{href:"/"+e.$page.auth.company.id+"/employees/"+e.updatedTeam.team_leader.id,"data-cy":"current-team-lead"}},[e._v("\n          "+e._s(e.updatedTeam.team_leader.name)+"\n        ")]),e._v(" "),e.updatedTeam.team_leader.position?e._e():a("span",{staticClass:"db f7 mt1",attrs:{"data-cy":"team-lead-undefined"}},[e._v("\n          "+e._s(e.$t("app.no_position_defined"))+"\n        ")]),e._v(" "),e.updatedTeam.team_leader.position?a("span",{staticClass:"db f7 mt1"},[e._v("\n          "+e._s(e.updatedTeam.team_leader.position.title)+"\n        ")]):e._e(),e._v(" "),e.$page.auth.employee.permission_level<=200?a("img",{staticClass:"absolute right-0 pointer team-lead-action",attrs:{src:"/img/common/triple-dots.svg","data-cy":"display-remove-team-lead-modal"},on:{click:function(t){t.preventDefault(),e.removeMode=!0}}}):e._e(),e._v(" "),e.removeMode?[a("div",{directives:[{name:"show",rawName:"v-show",value:e.$page.auth.employee.permission_level<=200,expression:"$page.auth.employee.permission_level <= 200"},{name:"click-outside",rawName:"v-click-outside",value:e.hideRemovalMode,expression:"hideRemovalMode"}],staticClass:"popupmenu absolute br2 bg-white z-max tl pv2 ph3 bounceIn"},[a("ul",{staticClass:"list ma0 pa0"},[a("li",{directives:[{name:"show",rawName:"v-show",value:!e.removalConfirmation,expression:"!removalConfirmation"}],staticClass:"pv2 relative"},[a("icon-delete",{attrs:{classes:"icon-delete relative",width:15,height:15}}),e._v(" "),a("a",{staticClass:"pointer ml1 c-delete",attrs:{"data-cy":"remove-team-lead-button"},on:{click:function(t){t.preventDefault(),e.removalConfirmation=!0}}},[e._v("\n                  "+e._s(e.$t("team.team_lead_remove_confirmation"))+"\n                ")])],1),e._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:e.removalConfirmation,expression:"removalConfirmation"}],staticClass:"pv2"},[e._v("\n                "+e._s(e.$t("app.sure"))+"\n                "),a("a",{staticClass:"c-delete mr1 pointer",attrs:{"data-cy":"confirm-remove-team-lead"},on:{click:function(t){return t.preventDefault(),e.removeTeamLead()}}},[e._v("\n                  "+e._s(e.$t("app.yes"))+"\n                ")]),e._v(" "),a("a",{staticClass:"pointer",on:{click:function(t){t.preventDefault(),e.removalConfirmation=!1}}},[e._v("\n                  "+e._s(e.$t("app.no"))+"\n                ")])])])])]:e._e()],2)])]:e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.updatedTeam.team_leader&&!e.editMode,expression:"!updatedTeam.team_leader && !editMode"}],staticClass:"lh-copy ma0 pa3 bb bb-gray"},[e.atLeastHR()?a("a",{staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer",attrs:{"data-cy":"add-team-lead-blank-state"},on:{click:function(t){return t.preventDefault(),e.displaySearch()}}},[e._v(e._s(e.$t("team.team_lead_cta")))]):e._e(),e._v(" "),e.atLeastHR()?e._e():a("span",{staticClass:"f6"},[e._v("\n      "+e._s(e.$t("team.team_lead_blank"))+"\n    ")])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.editMode,expression:"editMode"}],staticClass:"pa3 bb bb-gray"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[e.form.errors.length>0?[a("div",{staticClass:"cf pb1 w-100 mb2"},[a("errors",{attrs:{errors:e.form.errors}})],1)]:e._e(),e._v(" "),a("div",{staticClass:"mb3 relative"},[a("p",{staticClass:"mt0"},[e._v("Search employees "),a("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.editMode=!1}}},[e._v(e._s(e.$t("app.cancel")))])]),e._v(" "),a("div",{staticClass:"relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.searchTerm,expression:"form.searchTerm"}],ref:"search",staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:"search",type:"text",name:"search",placeholder:e.$t("employee.hierarchy_search_placeholder"),required:"","data-cy":"search-team-lead"},domProps:{value:e.form.searchTerm},on:{keyup:function(t){return e.search()},keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"]))return null;e.editMode=!1},input:function(t){t.target.composing||e.$set(e.form,"searchTerm",t.target.value)}}}),e._v(" "),e.processingSearch?a("ball-pulse-loader",{attrs:{color:"#5c7575",size:"7px"}}):e._e()],1)])],2),e._v(" "),a("div",{staticClass:"pl0 list ma0"},[e.potentialTeamLeads.length>0?a("ul",{staticClass:"list ma0 pl0"},e._l(e.potentialTeamLeads,(function(t){return a("li",{key:t.id,staticClass:"bb relative pv2 ph1 bb-gray bb-gray-hover"},[e._v("\n          "+e._s(t.name)+"\n          "),a("a",{staticClass:"absolute right-1 pointer",attrs:{"data-cy":"potential-team-lead-"+t.id},on:{click:function(a){return a.preventDefault(),e.assign(t)}}},[e._v("\n            "+e._s(e.$t("app.choose"))+"\n          ")])])})),0):e._e()]),e._v(" "),e.hasMadeASearch&&0==e.potentialTeamLeads.length?a("div",{staticClass:"silver"},[e._v("\n      "+e._s(e.$t("app.no_results"))+"\n    ")]):e._e()])],2)}),[],!1,null,"44da1ad2",null);t.default=c.exports},Hao9:function(e,t,a){var s=a("VhJa");"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,r);s.locals&&(e.exports=s.locals)},Iitk:function(e,t,a){"use strict";a.r(t);var s=a("pF+r"),r=(a("zHN7"),a("mM8D")),i={components:{TextInput:s.a,BallPulseLoader:r.a},props:{team:{type:Object,default:null},employees:{type:Array,default:null}},data:function(){return{editMode:!1,form:{searchTerm:null,errors:[]},processingSearch:!1,loadingState:"",errorTemplate:Error,potentialMembers:[],listOfEmployees:{type:Array,default:[]}}},mounted:function(){var e=this;this.listOfEmployees=this.employees,this.$root.$on("leadSet",(function(t){-1==e.listOfEmployees.findIndex((function(e){return e.id===t.id}))&&e.listOfEmployees.push(t)}))},methods:{load:function(e){this.$inertia.visit("/"+this.$page.auth.company.id+"/employees/"+e.id)},search:_.debounce((function(){var e=this;""!=this.form.searchTerm?(this.processingSearch=!0,axios.post("/"+this.$page.auth.company.id+"/teams/"+this.team.id+"/members/search",this.form).then((function(t){e.potentialMembers=t.data.data,e.processingSearch=!1})).catch((function(t){e.form.errors=_.flatten(_.toArray(t.response.data)),e.processingSearch=!1,e.addedEmployeeId=0}))):(this.potentialMembers=[],this.addedEmployeeId=0)}),500),add:function(e){var t=this;axios.post("/"+this.$page.auth.company.id+"/teams/"+this.team.id+"/members/attach/"+e.id).then((function(e){t.listOfEmployees.push(e.data.data),t.potentialMembers=[],t.form.searchTerm="",t.$snotify.success(t.$t("account.employee_statuses_success_destroy"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0})})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data)),t.potentialMembers=[],t.form.searchTerm=""}))},detach:function(e){var t=this;axios.post("/"+this.$page.auth.company.id+"/teams/"+this.team.id+"/members/detach/"+e.id).then((function(a){var s=t.listOfEmployees.findIndex((function(t){return t.id===e.id}));t.listOfEmployees.splice(s,1),t.$snotify.success(t.$t("account.employee_statuses_success_destroy"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0})})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))}}},n=(a("+upi"),a("KHd+")),o=Object(n.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{staticClass:"db fw5 mb3 flex justify-between items-center"},[a("span",[e._v("🤼‍♀️ "+e._s(e.$tc("team.count_team_members",e.listOfEmployees.length,{count:e.listOfEmployees.length})))]),e._v(" "),!e.editMode&&e.$page.auth.employee.permission_level<=200?a("a",{staticClass:"btn f5",attrs:{href:"","data-cy":"manage-team-on"},on:{click:function(t){t.preventDefault(),e.editMode=!0}}},[e._v(e._s(e.$t("team.members_enable_manage_mode")))]):e._e(),e._v(" "),e.editMode&&e.$page.auth.employee.permission_level<=200?a("a",{staticClass:"btn f5",attrs:{href:"","data-cy":"manage-team-off"},on:{click:function(t){t.preventDefault(),e.editMode=!1}}},[e._v(e._s(e.$t("team.members_disable_manage_mode")))]):e._e()]),e._v(" "),a("div",{staticClass:"mb4 bg-white box cf"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.editMode,expression:"editMode"}],staticClass:"bb bb-gray pa3"},[a("form",{staticClass:"relative",on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[a("text-input",{attrs:{id:"title",name:"title",datacy:"member-input",errors:e.$page.errors.title,label:e.$t("team.members_add_input"),placeholder:e.$t("team.members_add_input_help"),required:!1},on:{keyup:e.search,input:e.search},model:{value:e.form.searchTerm,callback:function(t){e.$set(e.form,"searchTerm",t)},expression:"form.searchTerm"}}),e._v(" "),e.processingSearch?a("ball-pulse-loader",{attrs:{color:"#5c7575",size:"7px"}}):e._e()],1),e._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:e.potentialMembers.length>0,expression:"potentialMembers.length > 0"}],staticClass:"list pl0 ba bb-gray bb-gray-hover"},e._l(e.potentialMembers,(function(t){return a("li",{key:t.id,staticClass:"relative pa2 bb bb-gray"},[e._v("\n          "+e._s(t.name)+"\n          "),a("a",{staticClass:"fr f6",attrs:{href:"","data-cy":"employee-id-"+t.id},on:{click:function(a){return a.preventDefault(),e.add(t)}}},[e._v(e._s(e.$t("team.members_add_cta")))])])})),0),e._v(" "),a("ul",{directives:[{name:"show",rawName:"v-show",value:0==e.potentialMembers.length&&e.form.searchTerm,expression:"potentialMembers.length == 0 && form.searchTerm"}],staticClass:"list pl0 ba bb-gray bb-gray-hover"},[a("li",{staticClass:"relative pa2 bb bb-gray"},[e._v("\n          "+e._s(e.$t("team.members_no_results"))+"\n        ")])])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.listOfEmployees.length>0,expression:"listOfEmployees.length > 0"}],staticClass:"pa3"},e._l(e.listOfEmployees,(function(t){return a("div",{key:t.id,staticClass:"fl w-third-l w-100 mb4",attrs:{"data-cy":"members-list"}},[a("span",{staticClass:"pl3 db relative team-member"},[a("img",{staticClass:"br-100 absolute avatar",attrs:{src:t.avatar}}),e._v(" "),a("inertia-link",{directives:[{name:"show",rawName:"v-show",value:!e.editMode,expression:"!editMode"}],staticClass:"mb2",attrs:{href:"/"+e.$page.auth.company.id+"/employees/"+t.id}},[e._v("\n            "+e._s(t.name)+"\n          ")]),e._v(" "),t.position?a("span",{directives:[{name:"show",rawName:"v-show",value:!e.editMode,expression:"!editMode"}],staticClass:"title db f7 mt1"},[e._v("\n            "+e._s(t.position.title)+"\n          ")]):a("span",{directives:[{name:"show",rawName:"v-show",value:!e.editMode,expression:"!editMode"}],staticClass:"title db f7 mt1"},[e._v("\n            "+e._s(e.$t("app.no_position_defined"))+"\n          ")]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.editMode,expression:"editMode"}],staticClass:"mb2"},[e._v("\n            "+e._s(t.name)+"\n          ")]),e._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:e.editMode,expression:"editMode"}],staticClass:"title db f7 mt1 c-delete dib",attrs:{href:"","data-cy":"remove-employee-"+t.id},on:{click:function(a){return a.preventDefault(),e.detach(t)}}},[e._v("\n            "+e._s(e.$t("team.members_remove"))+"\n          ")])],1)])})),0),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.listOfEmployees.length,expression:"listOfEmployees.length == 0"}],staticClass:"pa3 tc",attrs:{"data-cy":"members-list-blank-state"}},[a("p",{staticClass:"mv0"},[e._v(e._s(e.$t("team.members_blank")))])])])])}),[],!1,null,"1700f473",null);t.default=o.exports},Km7L:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".avatar[data-v-44da1ad2] {\n  left: 1px;\n  top: 5px;\n  width: 35px;\n}\n.team-lead[data-v-44da1ad2] {\n  padding-left: 44px;\n}\n.ball-pulse[data-v-44da1ad2] {\n  right: 8px;\n  top: 10px;\n  position: absolute;\n}\n.team-lead-action[data-v-44da1ad2] {\n  top: 22px;\n}\n.popupmenu[data-v-44da1ad2] {\n  right: -4px;\n}",""])},L7Em:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".avatar[data-v-1700f473] {\n  left: 1px;\n  top: 5px;\n  width: 35px;\n}\n.team-member[data-v-1700f473] {\n  padding-left: 44px;\n}\n.team-member .avatar[data-v-1700f473] {\n  top: 2px;\n}\n.ball-pulse[data-v-1700f473] {\n  right: 8px;\n  top: 37px;\n  position: absolute;\n}",""])},LG65:function(e,t,a){var s=a("2qaM");"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,r);s.locals&&(e.exports=s.locals)},LpCw:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".useful-link[data-v-0c9ff6bb] {\n  top: 4px;\n}",""])},PAcC:function(e,t,a){var s=a("Eswu");"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,r);s.locals&&(e.exports=s.locals)},"SL/y":function(e,t,a){"use strict";var s=a("FUPM");a.n(s).a},TmqM:function(e,t,a){var s=a("Km7L");"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,r);s.locals&&(e.exports=s.locals)},VhJa:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"\nsvg[data-v-0229880e] {\n  color: #b8394c;\n}\n",""])},"b/CC":function(e,t,a){"use strict";var s=a("LG65");a.n(s).a},l6R9:function(e,t,a){"use strict";var s=a("PAcC");a.n(s).a},nyzR:function(e,t,a){"use strict";var s={props:{classes:{type:String,default:""},width:{type:Number,default:0},height:{type:Number,default:0}}},r=(a("GLrx"),a("KHd+")),i=Object(r.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{class:this.classes,attrs:{xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("polyline",{attrs:{points:"3 6 5 6 21 6"}}),this._v(" "),t("path",{attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}),this._v(" "),t("line",{attrs:{x1:"10",y1:"11",x2:"10",y2:"17"}}),t("line",{attrs:{x1:"14",y1:"11",x2:"14",y2:"17"}})])}),[],!1,null,"0229880e",null);t.a=i.exports},o0ue:function(e,t,a){var s=a("L7Em");"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,r);s.locals&&(e.exports=s.locals)},"pF+r":function(e,t,a){"use strict";var s={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:{type:String,default:""},customRef:{type:String,default:"input"},name:{type:String,default:"input"},datacy:{type:String,default:""},placeholder:{type:String,default:""},help:{type:String,default:""},label:{type:String,default:""},required:{type:Boolean,default:!1},extraClassUpperDiv:{type:String,default:"mb3"},min:{type:Number,default:0},max:{type:Number,default:0},errors:{type:Array,default:function(){return[]}}},computed:{hasError:function(){return!!(this.errors.length>0&&this.required)}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(e,t){this.$refs.input.setSelectionRange(e,t)},sendEscKey:function(){this.$emit("esc-key-pressed")}}},r=(a("l6R9"),a("KHd+")),i=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.extraClassUpperDiv},[e.label?a("label",{staticClass:"db fw4 lh-copy f6",attrs:{for:e.id}},[e._v("\n    "+e._s(e.label)+"\n    "),e.required?e._e():a("span",{staticClass:"optional-badge f7"},[e._v("\n      "+e._s(e.$t("app.optional"))+"\n    ")])]):e._e(),e._v(" "),a("input",e._b({ref:e.customRef,staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:e.id,required:e.required,type:e.type,name:e.name,max:e.max,min:e.min,placeholder:e.placeholder,"data-cy":e.datacy},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.sendEscKey(t)}}},"input",e.$attrs,!1)),e._v(" "),e.hasError?a("div",{staticClass:"error-explanation pa3 ba br3 mt1"},[e._v("\n    "+e._s(e.errors[0])+"\n  ")]):e._e(),e._v(" "),e.help?a("p",{staticClass:"f7 mb3 lh-title"},[e._v("\n    "+e._s(e.help)+"\n  ")]):e._e()])}),[],!1,null,"df38947a",null);t.a=i.exports},rVr5:function(e,t,a){var s=a("8/4d");"string"==typeof s&&(s=[[e.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,r);s.locals&&(e.exports=s.locals)},rrJu:function(e,t,a){"use strict";var s={props:{errors:{type:Array,default:function(){return[]}}}},r=(a("SL/y"),a("KHd+")),i=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.errors.length>0?a("div",{staticClass:"border-red ba br3 pa3"},[a("p",{staticClass:"mv0 fw6"},[e._v(e._s(e.$t("app.error_title")))]),e._v(" "),a("p",{staticClass:"mb0"},[e._v(e._s(e.errors[0]))])]):e._e()}),[],!1,null,"1482dffa",null);t.a=i.exports},tfZK:function(e,t,a){"use strict";var s=a("+b2T");a.n(s).a},wIoM:function(e,t,a){"use strict";a.r(t);var s=a("+SZM"),r=a("IQOQ"),i=a.n(r),n=a("Iitk"),o=a("0d+L"),l=a("Gwnh"),d=a("zs33"),c={components:{Layout:s.a,Members:n.default,TeamDescription:o.default,TeamLead:l.default,TeamUsefulLink:d.default},directives:{clickOutside:i.a.directive},props:{notifications:{type:Array,default:null},employees:{type:Array,default:null},mostRecentEmployee:{type:String,default:null},employeeCount:{type:Number,default:null},team:{type:Object,default:null},news:{type:Array,default:null},newsCount:{type:Number,default:null},userBelongsToTheTeam:{type:Boolean,default:!1},links:{type:Array,default:null}},data:function(){return{updatedEmployees:{type:Array,default:[]}}},mounted:function(){localStorage.success&&(this.$snotify.success(localStorage.success,{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),localStorage.removeItem(success))},created:function(){this.updatedEmployees=this.employees},methods:{goToNews:function(){this.$inertia.visit("/"+this.$page.auth.company.id+"/teams/"+this.team.id+"/news")},refreshTeamMembers:function(e){this.updatedEmployees.push(e)}}},u=(a("b/CC"),a("KHd+")),m=Object(u.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("layout",{attrs:{title:"Home",notifications:e.notifications}},[a("div",{staticClass:"ph2 ph5-ns"},[a("div",{staticClass:"mt4-l mt1 mb3 mw7 br3 center breadcrumb relative z-0 f6 pb2"},[a("ul",{staticClass:"list ph0 tc-l tl"},[a("li",{staticClass:"di"},[a("inertia-link",{attrs:{href:"/"+e.$page.auth.company.id+"/dashboard"}},[e._v(e._s(e.$page.auth.company.name))])],1),e._v(" "),a("li",{staticClass:"di"},[a("inertia-link",{attrs:{href:"/"+e.$page.auth.company.id+"/teams"}},[e._v(e._s(e.$t("app.breadcrumb_team_list")))])],1),e._v(" "),a("li",{staticClass:"di"},[e._v("\n          "+e._s(e.team.name)+"\n        ")])])]),e._v(" "),a("div",{staticClass:"cf mw8 center"},[a("div",{staticClass:"fl w-30-l w-100"},[a("div",{staticClass:"bg-white box mb4"},[a("h2",{staticClass:"bb bb-gray pa3 ma0 fw5 team-title"},[e._v("\n            "+e._s(e.team.name)+"\n          ")]),e._v(" "),a("team-description",{attrs:{team:e.team,"user-belongs-to-the-team":e.userBelongsToTheTeam}}),e._v(" "),0!=e.employeeCount?a("p",{staticClass:"lh-copy ma0 pa3 bb bb-gray",attrs:{"data-cy":"latest-added-employee-name"}},[e._v("\n            "+e._s(e.mostRecentEmployee)+"\n          ")]):e._e(),e._v(" "),a("team-lead",{attrs:{team:e.team,"user-belongs-to-the-team":e.userBelongsToTheTeam},on:{"lead-set":function(t){return e.refreshTeamMembers(t)}}}),e._v(" "),a("team-useful-link",{attrs:{team:e.team,"user-belongs-to-the-team":e.userBelongsToTheTeam,links:e.links}})],1)]),e._v(" "),a("div",{staticClass:"fl w-70-l w-100 pl4-l"},[a("members",{attrs:{employees:e.updatedEmployees,team:e.team}}),e._v(" "),a("h3",{staticClass:"db fw5 mb3 flex justify-between items-center"},[a("span",[e._v("🗞 "+e._s(e.$tc("team.count_team_news",e.newsCount,{count:e.newsCount})))]),e._v(" "),e.userBelongsToTheTeam||e.$page.auth.employee.permission_level<=200?a("inertia-link",{staticClass:"btn f5",attrs:{href:"/"+e.$page.auth.company.id+"/teams/"+e.team.id+"/news/create","data-cy":"add-team-news"}},[e._v(e._s(e.$t("team.news_write")))]):e._e()],1),e._v(" "),a("div",{staticClass:"mb4"},[e.news.length>0?a("div",[a("div",{staticClass:"bg-white box cf mb4 relative",attrs:{"data-cy":"news-list"}},[e._l(e.news,(function(t){return a("div",{key:t.id,staticClass:"pa3 bb bb-gray"},[a("h3",{staticClass:"mt0 mb0-ns mb2 normal pointer",on:{click:function(t){return t.preventDefault(),e.goToNews()}}},[e._v("\n                  "+e._s(t.title)+"\n                ")]),e._v(" "),a("div",{staticClass:"f6 relative news-information silver"},[a("img",{staticClass:"br-100 relative mr1 dib-ns dn",attrs:{src:t.author.avatar}}),e._v("\n                  "+e._s(e.$t("team.team_news_written_by_at",{name:t.author.name,created_at:t.localized_created_at}))+"\n                ")])])})),e._v(" "),a("div",{staticClass:"pa3 tc"},[a("inertia-link",{attrs:{href:"/"+e.$page.auth.company.id+"/teams/"+e.team.id+"/news","data-cy":"view-all-news"}},[e._v(e._s(e.$t("team.news_view_all")))])],1)],2)]):a("div",{staticClass:"bg-white box pa3 cf news mb4 tc"},[e._v("\n            "+e._s(e.$t("team.news_blank"))+"\n          ")])])],1)])])])}),[],!1,null,"00d10490",null);t.default=m.exports},zrnk:function(e,t,a){"use strict";var s=a("TmqM");a.n(s).a},zs33:function(e,t,a){"use strict";a.r(t);var s=a("pF+r"),r=a("Z84v"),i=a("rrJu"),n={components:{TextInput:s.a,LoadingButton:r.a,Errors:i.a},props:{team:{type:Object,default:null},links:{type:Array,default:null},userBelongsToTheTeam:{type:Boolean,default:!1}},data:function(){return{addMode:!1,editMode:!1,form:{url:null,label:null,type:null,errors:[]},loadingState:"",updatedLinks:[]}},created:function(){this.updatedLinks=this.links},methods:{labelOrLink:function(e){return e.label?e.label:e.url},showEditMode:function(){this.editMode=!0},submit:function(){var e=this;this.loadingState="loading",axios.post("/"+this.$page.auth.company.id+"/teams/"+this.team.id+"/links",this.form).then((function(t){e.$snotify.success(e.$t("team.description_success"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),e.updatedLinks.push(t.data.data),e.addMode=!1,e.loadingState=null,e.form.url=null,e.form.type=null,e.form.label=null})).catch((function(t){e.loadingState=null,e.form.errors=_.flatten(_.toArray(t.response.data))}))},removeLink:function(e){var t=this;axios.delete("/"+this.$page.auth.company.id+"/teams/"+this.team.id+"/links/"+e.id).then((function(e){t.$snotify.success(t.$t("team.team_lead_removed"),{timeout:2e3,showProgressBar:!0,closeOnClick:!0,pauseOnHover:!0}),t.updatedLinks.splice(t.updatedLinks.findIndex((function(t){return t.id==e.data.data})),1),t.editMode=!1})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data))}))},teamMemberOrAtLeastHR:function(){return this.$page.auth.employee.permission_level<=200||0!=this.userBelongsToTheTeam}}},o=(a("tfZK"),a("KHd+")),l=Object(o.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"ma0 pa3"},[a("p",{staticClass:"silver f6 ma0 mb1"},[e._v(e._s(e.$t("team.useful_link_title")))]),e._v(" "),a("ul",{staticClass:"list pl0 mb0"},[e._l(e.updatedLinks,(function(t){return a("li",{key:t.id,staticClass:"mb2 relative",attrs:{"data-cy":"team-useful-link-"+t.id}},["slack"==t.type?a("img",{staticClass:"relative useful-link",attrs:{src:"/img/slack.svg","data-cy":"team-useful-link-logo-slack-"+t.id}}):e._e(),e._v(" "),"email"==t.type?a("img",{staticClass:"relative useful-link",attrs:{src:"/img/mail.svg","data-cy":"team-useful-link-logo-email-"+t.id}}):e._e(),e._v(" "),"url"==t.type?a("img",{staticClass:"relative useful-link",attrs:{src:"/img/url.svg","data-cy":"team-useful-link-logo-url-"+t.id}}):e._e(),e._v(" "),e.editMode?e._e():["url"==t.type||"slack"==t.type?a("a",{staticClass:"relative ml1",attrs:{href:t.url}},[e._v(e._s(e.labelOrLink(t)))]):e._e(),e._v(" "),"email"==t.type?a("a",{staticClass:"relative ml1",attrs:{href:"mailto:"+t.url}},[e._v(e._s(e.labelOrLink(t)))]):e._e()],e._v(" "),e.editMode?[a("span",{staticClass:"f6"},[e._v(e._s(e.labelOrLink(t)))]),e._v(" "),a("a",{staticClass:"f6",attrs:{href:"#","data-cy":"team-useful-link-"+t.id+"-destroy"},on:{click:function(a){return a.preventDefault(),e.removeLink(t)}}},[e._v(e._s(e.$t("app.remove")))])]:e._e()],2)})),e._v(" "),0==e.addMode&&e.teamMemberOrAtLeastHR()?a("li",{staticClass:"mt3"},[e.editMode?e._e():a("a",{staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer f6",attrs:{href:"","data-cy":"useful-link-add-new-link"},on:{click:function(t){t.preventDefault(),e.addMode=!0}}},[a("span",[e._v("+")]),e._v(" "+e._s(e.$t("team.useful_link_cta")))]),e._v(" "),!e.editMode&&e.updatedLinks.length>0?a("span",{staticClass:"moon-gray"},[e._v("|")]):e._e(),e._v(" "),!e.editMode&&e.updatedLinks.length>0?a("a",{staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer f6",attrs:{href:"","data-cy":"useful-link-edit-links"},on:{click:function(t){t.preventDefault(),e.editMode=!0}}},[e._v(e._s(e.$t("team.useful_link_edit")))]):e._e(),e._v(" "),e.editMode?a("a",{staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer f6",attrs:{href:"","data-cy":"useful-link-exit-edit-link"},on:{click:function(t){t.preventDefault(),e.editMode=!1}}},[e._v(e._s(e.$t("team.useful_link_exit_edit_mode")))]):e._e()]):e._e()],2),e._v(" "),e.addMode?[a("form",{staticClass:"mt3",on:{submit:function(t){return t.preventDefault(),e.submit()}}},[e.form.errors.length>0?[a("div",{staticClass:"cf pb1 w-100 mb2"},[a("errors",{attrs:{errors:e.form.errors}})],1)]:e._e(),e._v(" "),a("label",{staticClass:"lh-copy f6"},[e._v("\n          "+e._s(e.$t("team.useful_link_type_of_link"))+"\n        ")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.type,expression:"form.type"}],staticClass:"mb3",attrs:{required:"","data-cy":"useful-link-type"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.form,"type",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"url"}},[e._v("\n            "+e._s(e.$t("team.useful_link_form_url"))+"\n          ")]),e._v(" "),a("option",{attrs:{value:"email"}},[e._v("\n            "+e._s(e.$t("team.useful_link_form_email"))+"\n          ")]),e._v(" "),a("option",{attrs:{value:"slack"}},[e._v("\n            "+e._s(e.$t("team.useful_link_form_slack"))+"\n          ")])]),e._v(" "),a("text-input",{attrs:{id:"label",name:"label",datacy:"link-label-input",errors:e.$page.errors.label,label:e.$t("team.useful_link_new_label"),help:e.$t("team.useful_link_new_label_help")},model:{value:e.form.label,callback:function(t){e.$set(e.form,"label",t)},expression:"form.label"}}),e._v(" "),a("text-input",{attrs:{id:"url",name:"url",datacy:"link-url-input",errors:e.$page.errors.url,label:e.$t("team.useful_link_new_url"),help:e.$t("team.useful_link_new_url_help"),required:!0},model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}}),e._v(" "),a("div",{staticClass:"mb0"},[a("div",{staticClass:"flex-ns justify-between"},[a("div",[a("a",{staticClass:"btn dib tc w-auto-ns w-100 mb2 pv2 ph3",on:{click:function(t){t.preventDefault(),e.addMode=!1}}},[e._v("\n                "+e._s(e.$t("app.cancel"))+"\n              ")])]),e._v(" "),a("loading-button",{attrs:{classes:"btn add w-auto-ns w-100 mb2 pv2 ph3",state:e.loadingState,text:e.$t("app.add"),"cypress-selector":"useful-link-submit-button"}})],1)])],2)]:e._e()],2)])}),[],!1,null,"0c9ff6bb",null);t.default=l.exports}}]);
//# sourceMappingURL=5.js.map?id=6825bec138c7d628ebdc