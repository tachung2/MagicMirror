class activateProcess{constructor(){console.log("[GA] activateProcess Ready")}assistantActivate(s,t){if("standby"!=s.GAStatus.actual&&!t.force)return logGA("Assistant is busy.");s.assistantResponse.clearAliveTimers(),"continue"==s.GAStatus.actual?s.assistantResponse.showTranscription(s.translate("GAContinue")):s.assistantResponse.showTranscription(s.translate("GABegin")),s.Hooks.doPlugin(s,"onActivate"),s.assistantResponse.fullscreen(!0),s.lastQuery=null;var a={type:"TEXT",key:null,lang:s.config.assistantConfig.lang,status:s.GAStatus.old,chime:!0};a=Object.assign({},a,t);s.assistantResponse.status(a.type,!!a.chime),s.sendSocketNotification("ACTIVATE_ASSISTANT",a)}postProcess(s,t,a=(()=>{}),e=(()=>{})){if("continue"==t.lastQuery.status)return e();var n=s.Hooks.findAllHooks(s,t);if(n.length>0){s.assistantResponse.status("hook");for(var o=0;o<n.length;o++){var i=n[o];s.Hooks.doCommand(s,i.command,i.params,i.from)}s.forceResponse?(s.forceResponse=!1,e()):a()}else e()}}