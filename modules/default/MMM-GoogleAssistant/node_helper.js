var parseData=require("./components/parseData.js");logGA=(...e)=>{};var NodeHelper=require("node_helper");module.exports=NodeHelper.create({start:function(){parseData.init(this)},socketNotificationReceived:function(e,s){switch(e){case"INIT":this.config=s,console.log("[GA] MMM-GoogleAssistant Version:",require("./package.json").version,"rev:",require("./package.json").rev),this.config.assistantConfig.modulePath=__dirname,parseData.parse(this);break;case"ACTIVATE_ASSISTANT":this.lib.activateAssistant.activate(this,s);break;case"SHELLEXEC":this.lib.shellExec.exec(this,s);break;case"GOOGLESEARCH":this.lib.searchOnGoogle.search(this,s)}}});