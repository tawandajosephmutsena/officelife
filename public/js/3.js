(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{IGs0:function(t,e,a){var s=a("VPUt");"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(t.exports=s.locals)},K7ao:function(t,e,a){"use strict";var s=a("WEuL");a.n(s).a},VPUt:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".blank-state-actions[data-v-0229895c] {\n  background-color: #f3f6f9;\n}\n.blank-state-actions img[data-v-0229895c] {\n  top: 3px;\n}",""])},WEuL:function(t,e,a){var s=a("lgrN");"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,i);s.locals&&(t.exports=s.locals)},XF8h:function(t,e,a){"use strict";var s=a("IGs0");a.n(s).a},aYEy:function(t,e,a){"use strict";a.r(e);var s=a("IQOQ"),i=a.n(s),o=(a("zHN7"),{components:{BallPulseLoader:a("mM8D").a},directives:{clickOutside:i.a.directive},props:{action:{type:Object,default:null}},data:function(){return{who:"",message:"",updatedMessage:"",notification:{id:0,type:"",target:"",employeeId:0,teamId:0,message:"",complete:!1},form:{searchTerm:null,errors:[]},processingSearch:!1,searchEmployees:[],searchTeams:[],displayModal:!1,actionsModal:!1,showEveryoneConfirmationModal:!1,showSeachEmployeeModal:!1,showSeachTeamModal:!1,showEditMessage:!1,deleteActionConfirmation:!1}},computed:{charactersLeft:function(){return"Characters remaining: "+(255-this.updatedMessage.length)+" / 255"}},mounted:function(){this.popupItem=this.$el,this.notification=this.action,this.who="an employee",this.setMessage(this.$t("account.flow_new_action_label_unknown_message"))},methods:{displayConfirmationModal:function(){this.showEveryoneConfirmationModal=!0,this.displayModal=!1},displayEmployeeSearchBox:function(){this.displayModal=!1,this.showSeachEmployeeModal=!0},displayTeamSearchBox:function(){this.displayModal=!1,this.showSeachTeamModal=!0},displayEditMessageTextarea:function(){this.notification.message==this.$t("account.flow_new_action_label_unknown_message")?this.updatedMessage="":this.updatedMessage=this.notification.message,this.showEditMessage=!0},toggleModals:function(){this.showEveryoneConfirmationModal=!1,this.displayModal=!1,this.showSeachEmployeeModal=!1,this.showSeachTeamModal=!1,this.actionsModal=!1,this.showEditMessage=!1},checkComplete:function(){""!=this.notification.message&&this.notification.message!=this.$t("account.flow_new_action_label_unknown_message")&&this.notification.target&&(this.notification.complete=!0)},setTarget:function(t){switch(this.notification.target=t,this.toggleModals(),t){case"actualEmployee":this.who=this.$t("account.flow_new_action_label_actual_employee");break;case"everyone":this.who=this.$t("account.flow_new_action_label_everyone");break;case"managers":this.who=this.$t("account.flow_new_action_label_managers");break;case"directReports":this.who=this.$t("account.flow_new_action_label_reports");break;case"employeeTeam":this.who=this.$t("account.flow_new_action_label_team_employee");break;case"specificTeam":case"specificEmployee":break;default:this.who=this.$t("account.flow_new_action_label_employee")}this.checkComplete(),this.$emit("update",this.notification)},searchEmployee:_.debounce((function(){var t=this;""!=this.form.searchTerm&&(this.processingSearch=!0,axios.post("/search/employees/",this.form).then((function(e){t.searchEmployees=e.data.data,t.processingSearch=!1})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data)),t.processingSearch=!1})))}),500),searchTeam:_.debounce((function(){var t=this;""!=this.form.searchTerm&&(this.processingSearch=!0,axios.post("/search/teams/",this.form).then((function(e){t.searchTeams=e.data.data,t.processingSearch=!1})).catch((function(e){t.form.errors=_.flatten(_.toArray(e.response.data)),t.processingSearch=!1})))}),500),assignEmployee:function(t){this.notification.employeeId=t.id,this.who=t.name,this.setTarget("specificEmployee"),this.toggleModals()},assignTeam:function(t){this.notification.teamId=t.id,this.who=t.name,this.setTarget("specificTeam"),this.toggleModals()},destroyAction:function(){this.$emit("destroy")},setMessage:function(t){this.notification.message=""==t?this.$t("account.flow_new_action_label_unknown_message"):t,this.message=this.notification.message,this.toggleModals(),this.checkComplete(),this.$emit("update",this.notification)}}}),n=(a("K7ao"),a("KHd+")),c=Object(n.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"relative pr3 lh-copy"},[t._v("\n  Notify "),a("span",{staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer",on:{click:function(e){t.displayModal=!0}}},[t._v(t._s(t.who))]),t._v(" with "),a("span",{staticClass:"bb b--dotted bt-0 bl-0 br-0 pointer",on:{click:t.displayEditMessageTextarea}},[t._v(t._s(t.message))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.displayModal,expression:"displayModal"},{name:"click-outside",rawName:"v-click-outside",value:t.toggleModals,expression:"toggleModals"}],staticClass:"popupmenu employee-modal absolute br2 bg-white z-max tl pv2 ph3 bounceIn faster"},[a("ul",{staticClass:"list ma0 pa0"},[a("li",{staticClass:"pv1"},[a("a",{staticClass:"pointer",on:{click:function(e){return e.preventDefault(),t.setTarget("actualEmployee")}}},[t._v(t._s(t.$t("account.flow_new_action_notification_actual_employee")))])]),t._v(" "),a("li",{staticClass:"pv1"},[a("a",{staticClass:"pointer",on:{click:function(e){return e.preventDefault(),t.displayEmployeeSearchBox(e)}}},[t._v(t._s(t.$t("account.flow_new_action_notification_specific_employee")))])]),t._v(" "),a("li",{staticClass:"pv1"},[a("a",{staticClass:"pointer",on:{click:function(e){return e.preventDefault(),t.setTarget("managers")}}},[t._v(t._s(t.$t("account.flow_new_action_notification_manager")))])]),t._v(" "),a("li",{staticClass:"pv1"},[a("a",{staticClass:"pointer",on:{click:function(e){return e.preventDefault(),t.setTarget("directReports")}}},[t._v(t._s(t.$t("account.flow_new_action_notification_report")))])]),t._v(" "),a("li",{staticClass:"pv1"},[a("a",{staticClass:"pointer",on:{click:function(e){return e.preventDefault(),t.setTarget("employeeTeam")}}},[t._v(t._s(t.$t("account.flow_new_action_notification_team_members")))])]),t._v(" "),a("li",{staticClass:"pv1"},[a("a",{staticClass:"pointer",on:{click:function(e){return e.preventDefault(),t.displayTeamSearchBox(e)}}},[t._v(t._s(t.$t("account.flow_new_action_notification_specific_team")))])]),t._v(" "),a("li",{staticClass:"pv1"},[a("a",{staticClass:"pointer",on:{click:function(e){return e.preventDefault(),t.displayConfirmationModal(e)}}},[t._v(t._s(t.$t("account.flow_new_action_notification_everyone")))])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showEveryoneConfirmationModal,expression:"showEveryoneConfirmationModal"},{name:"click-outside",rawName:"v-click-outside",value:t.toggleModals,expression:"toggleModals"}],staticClass:"popupmenu confirmation-menu absolute br2 bg-white z-max tl pv2 ph3 bounceIn faster"},[a("p",{staticClass:"lh-copy"},[t._v("\n      "+t._s(t.$t("account.flow_new_action_notification_confirmation"))+"\n    ")]),t._v(" "),a("ul",{staticClass:"list ma0 pa0 pb2"},[a("li",{staticClass:"pv2 di relative mr2"},[a("a",{staticClass:"pointer ml1",on:{click:function(e){return e.preventDefault(),t.setTarget("everyone")}}},[t._v(t._s(t.$t("app.yes_sure")))])]),t._v(" "),a("li",{staticClass:"pv2 di"},[a("a",{staticClass:"pointer",on:{click:function(e){e.preventDefault(),t.showEveryoneConfirmationModal=!1,t.displayModal=!0}}},[t._v(t._s(t.$t("app.no")))])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showSeachEmployeeModal,expression:"showSeachEmployeeModal"},{name:"click-outside",rawName:"v-click-outside",value:t.toggleModals,expression:"toggleModals"}],staticClass:"popupmenu confirmation-menu absolute br2 bg-white z-max tl pv2 ph3 bounceIn faster"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.searchEmployee(e)}}},[a("div",{staticClass:"mb3 relative"},[a("p",[t._v(t._s(t.$t("account.flow_new_action_notification_search_employees")))]),t._v(" "),a("div",{staticClass:"relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.searchTerm,expression:"form.searchTerm"}],ref:"search",staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:"search",type:"text",name:"search",placeholder:t.$t("account.flow_new_action_notification_search_hint"),required:""},domProps:{value:t.form.searchTerm},on:{keyup:t.searchEmployee,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.toggleModals()},input:function(e){e.target.composing||t.$set(t.form,"searchTerm",e.target.value)}}}),t._v(" "),t.processingSearch?a("ball-pulse-loader",{attrs:{color:"#5c7575",size:"7px"}}):t._e()],1)])]),t._v(" "),a("ul",{staticClass:"pl0 list ma0"},[a("li",{staticClass:"fw5 mb3"},[a("span",{staticClass:"f6 mb2 dib"},[t._v(t._s(t.$t("employee.hierarchy_search_results")))]),t._v(" "),t.searchEmployees.length>0?a("ul",{staticClass:"list ma0 pl0"},t._l(t.searchEmployees,(function(e){return a("li",{key:e.id,staticClass:"bb relative pv2 ph1 bb-gray bb-gray-hover"},[t._v("\n            "+t._s(e.name)+"\n            "),a("a",{staticClass:"absolute right-1 pointer",attrs:{"data-cy":"potential-manager-button"},on:{click:function(a){return a.preventDefault(),t.assignEmployee(e)}}},[t._v(t._s(t.$t("app.choose")))])])})),0):a("div",{staticClass:"silver"},[t._v("\n          "+t._s(t.$t("app.no_results"))+"\n        ")])])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showSeachTeamModal,expression:"showSeachTeamModal"},{name:"click-outside",rawName:"v-click-outside",value:t.toggleModals,expression:"toggleModals"}],staticClass:"popupmenu confirmation-menu absolute br2 bg-white z-max tl pv2 ph3 bounceIn faster"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.searchTeam(e)}}},[a("div",{staticClass:"mb3 relative"},[a("p",[t._v(t._s(t.$t("account.flow_new_action_notification_search_teams")))]),t._v(" "),a("div",{staticClass:"relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.searchTerm,expression:"form.searchTerm"}],ref:"search",staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{id:"search",type:"text",name:"search",placeholder:t.$t("account.flow_new_action_notification_search_hint"),required:""},domProps:{value:t.form.searchTerm},on:{keyup:t.searchTeam,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.toggleModals()},input:function(e){e.target.composing||t.$set(t.form,"searchTerm",e.target.value)}}}),t._v(" "),t.processingSearch?a("ball-pulse-loader",{attrs:{color:"#5c7575",size:"7px"}}):t._e()],1)])]),t._v(" "),a("ul",{staticClass:"pl0 list ma0"},[a("li",{staticClass:"fw5 mb3"},[a("span",{staticClass:"f6 mb2 dib"},[t._v(t._s(t.$t("employee.hierarchy_search_results")))]),t._v(" "),t.searchTeams.length>0?a("ul",{staticClass:"list ma0 pl0"},t._l(t.searchTeams,(function(e){return a("li",{key:e.id,staticClass:"bb relative pv2 ph1 bb-gray bb-gray-hover"},[t._v("\n            "+t._s(e.name)+"\n            "),a("a",{staticClass:"absolute right-1 pointer",attrs:{"data-cy":"potential-manager-button"},on:{click:function(a){return a.preventDefault(),t.assignTeam(e)}}},[t._v(t._s(t.$t("app.choose")))])])})),0):a("div",{staticClass:"silver"},[t._v("\n          "+t._s(t.$t("app.no_results"))+"\n        ")])])])]),t._v(" "),a("img",{staticClass:"absolute right-0 pointer actions-dots",attrs:{src:"/img/common/triple-dots.svg"},on:{click:function(e){t.actionsModal=!0}}}),t._v(" "),t.actionsModal?a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.toggleModals,expression:"toggleModals"}],staticClass:"popupmenu action-menu absolute br2 bg-white z-max tl pv2 ph3 bounceIn list-employees-modal"},[a("ul",{staticClass:"list ma0 pa0"},[a("li",{directives:[{name:"show",rawName:"v-show",value:!t.deleteActionConfirmation,expression:"!deleteActionConfirmation"}],staticClass:"pv2 relative"},[a("icon-delete",{attrs:{classes:"icon-delete relative",width:15,height:15}}),t._v(" "),a("a",{staticClass:"pointer ml1 c-delete",on:{click:function(e){e.preventDefault(),t.deleteActionConfirmation=!0}}},[t._v(t._s(t.$t("account.flow_new_action_remove")))])],1),t._v(" "),a("li",{directives:[{name:"show",rawName:"v-show",value:t.deleteActionConfirmation,expression:"deleteActionConfirmation"}],staticClass:"pv2"},[t._v("\n        "+t._s(t.$t("app.sure"))+"\n        "),a("a",{staticClass:"c-delete mr1 pointer",on:{click:function(e){return e.preventDefault(),t.destroyAction(e)}}},[t._v(t._s(t.$t("app.yes")))]),t._v(" "),a("a",{staticClass:"pointer",on:{click:function(e){e.preventDefault(),t.deleteActionConfirmation=!1}}},[t._v(t._s(t.$t("app.no")))])])])]):t._e(),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showEditMessage,expression:"showEditMessage"}],staticClass:"mt2"},[a("p",{staticClass:"mb1 f6"},[t._v("\n      "+t._s(t.charactersLeft)+"\n    ")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.updatedMessage,expression:"updatedMessage"}],staticClass:"br2 f5 w-100 ba b--black-40 pa2 outline-0",attrs:{cols:"30",rows:"3",maxlength:"255"},domProps:{value:t.updatedMessage},on:{input:function(e){e.target.composing||(t.updatedMessage=e.target.value)}}}),t._v(" "),a("div",{staticClass:"mv1"},[a("div",{staticClass:"flex-ns justify-between"},[a("a",{staticClass:"btn btn-secondary dib tc w-auto-ns w-100 mb2 pv2 ph3",on:{click:function(e){t.showEditMessage=!1}}},[t._v(t._s(t.$t("app.cancel")))]),t._v(" "),a("a",{staticClass:"btn dib tc w-auto-ns w-100 mb2 pv2 ph3",on:{click:function(e){return t.setMessage(t.updatedMessage)}}},[t._v(t._s(t.$t("app.save")))])])])])])}),[],!1,null,"026ba516",null);e.default=c.exports},lgrN:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".actions-dots[data-v-026ba516] {\n  top: 15px;\n}\n.employee-modal[data-v-026ba516] {\n  top: 30px;\n  left: -120px;\n  right: 290px;\n}\n.confirmation-menu[data-v-026ba516] {\n  top: 30px;\n  left: -160px;\n  right: initial;\n  width: 310px;\n}\n.action-menu[data-v-026ba516] {\n  right: -6px;\n  top: 31px;\n}\n.icon-delete[data-v-026ba516] {\n  top: 2px;\n}\n.ball-pulse[data-v-026ba516] {\n  right: 8px;\n  top: 10px;\n  position: absolute;\n}",""])},xCLS:function(t,e,a){"use strict";a.r(e);var s={components:{ActionNotification:a("aYEy").default},model:{prop:"value",event:"change"},props:{value:{type:Array,default:null}},data:function(){return{complete:!1,localActions:[],uniqueIds:0,showActionMenu:!1}},computed:{orderedActions:function(){return _.orderBy(this.localActions,"id")}},mounted:function(){this.localActions=this.value},methods:{addAction:function(t){this.uniqueIds=this.uniqueIds+1,this.localActions.push({id:this.uniqueIds,type:t}),this.showActionMenu=!1,this.$emit("change",this.localActions),this.$emit("completed",this.complete)},updateAction:function(t,e){Vue.set(this.localActions,this.localActions.indexOf(e),t);for(var a=!0,s=0;s<this.localActions.length;s++){var i=this.localActions[s];0!=i.complete&&i.complete||(a=!1)}this.complete=a,this.$emit("completed",this.complete)},destroyAction:function(t){this.localActions.splice(this.localActions.findIndex((function(e){return e.id===t.id})),1)}}},i=(a("XF8h"),a("KHd+")),o=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.orderedActions.length,expression:"orderedActions.length != 0"}],staticClass:"bb bb-gray pa3"},[a("p",{staticClass:"ma0 pa0 mb1 f6"},[t._v("\n      "+t._s(t.$t("account.flow_new_action_following"))+"\n    ")]),t._v(" "),a("ul",{staticClass:"list ma0 pa0 tl"},t._l(t.orderedActions,(function(e){return a("li",{key:e.id,staticClass:"relative db bb-gray-hover pv2 ph1"},[a("action-notification",{attrs:{action:e},on:{destroy:function(a){return t.destroyAction(e)},update:function(a){return t.updateAction(a,e)}}})],1)})),0)]),t._v(" "),a("div",{staticClass:"pa3"},[a("a",{directives:[{name:"show",rawName:"v-show",value:!t.showActionMenu,expression:"!showActionMenu"}],staticClass:"btn dib",on:{click:function(e){e.preventDefault(),t.showActionMenu=!0}}},[t._v("Add action")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showActionMenu,expression:"showActionMenu"}],staticClass:"tc"},[a("div",{staticClass:"tl pv2 ph2 mb3 blank-state-actions dib mr3 br2 pointer",on:{click:function(e){return t.addAction("notification")}}},[a("img",{staticClass:"relative mr1",attrs:{src:"/img/company/account/action-notification.svg",height:"18",width:"20"}}),t._v("\n        "+t._s(t.$t("account.flow_new_action_notification"))+"\n      ")]),t._v(" "),a("div",{staticClass:"tl pv2 ph2 mb3 blank-state-actions dib mr3 br2 pointer"},[a("img",{staticClass:"relative mr1",attrs:{src:"/img/company/account/action-task.svg",height:"20",width:"20"}}),t._v("\n        "+t._s(t.$t("account.flow_new_action_task"))+"\n      ")]),t._v(" "),a("div",{staticClass:"tl pv2 ph2 mb3 blank-state-actions dib mr3 br2 pointer"},[a("img",{staticClass:"relative mr1",attrs:{src:"/img/company/account/action-email.svg",height:"20",width:"20"}}),t._v("\n        "+t._s(t.$t("account.flow_new_action_email"))+"\n      ")])])])])}),[],!1,null,"0229895c",null);e.default=o.exports}}]);
//# sourceMappingURL=3.js.map?id=4613e16901ea8ccbb012