logGW=(...t)=>{},Module.register("Gateway",{requiresVersion:"2.22.0",defaults:{debug:!1,username:"admin",password:"admin",usePM2:!1,PM2Id:0,CLIENT_ID:null},start:async function(){this.config.debug&&(logGW=(...t)=>{console.log("[GATEWAY]",...t)}),this.callbacks=new callbacks,this.AssistantActions=new AssistantActions,this.ActionsOnEXT=new ActionsOnEXT,this.OthersRules=new OthersRules;let t=new GWDatabase;this.ExtDB=t.ExtDB(),this.GW=await t.createGW(this),this.awaitGATimer=null,this.sendSocketNotification("INIT",this.config)},getTranslations:function(){return{en:"translations/en.json",fr:"translations/fr.json",it:"translations/it.json",de:"translations/de.json",es:"translations/es.json",nl:"translations/nl.json",pt:"translations/pt.json",ko:"translations/ko.json",el:"translations/el.json",vi:"translation/vi.json"}},getScripts:function(){return["/modules/Gateway/components/translations.js","/modules/Gateway/components/AssistantActions.js","/modules/Gateway/components/ActionsOnEXT.js","/modules/Gateway/components/OthersRules.js","/modules/Gateway/components/GWDatabase.js","/modules/Gateway/components/callbacks.js"]},getDom:function(){var t=document.createElement("div");return t.style.display="none",t},notificationReceived:function(t,s,i){if(t.startsWith("ASSISTANT_"))return this.AssistantActions.Actions(this,t);if(t.startsWith("EXT_"))return this.ActionsOnEXT.Actions(this,t,s,i);switch(t){case"GA_READY":"MMM-GoogleAssistant"==i.name?(this.GW.GA_Ready=!0,this.sendSocketNotification("HELLO","MMM-GoogleAssistant"),logGW("Hello, MMM-GoogleAssistant")):console.error("[GATEWAY]",this.sender.name,"Don't try to enforce my rules!");break;case"SHOW_ALERT":if(!this.GW["EXT-Alert"].hello)return;logGW("Trigger Alert from:",s),this.sendNotification("EXT_ALERT",{message:s.message,type:"warning",sender:s.title?s.title:i.name,timer:s.timer&&0!=s.timer?s.timer:null})}},socketNotificationReceived:async function(t,s){if(t.startsWith("CB_"))return this.callbacks.cb(this,t,s);switch(t){case"MMConfig":let t=new GWTranslations,i=await t.LoadGWTranslation(this),e=await t.LoadGWDescription(this),n=await t.LoadGWTrSchemaValidation(this);this.sendSocketNotification("MMConfig",{DB:this.ExtDB,Description:e,Translate:i,Schema:n,EXTStatus:this.GW});break;case"WARNING":this.sendNotification("EXT_ALERT",{type:"warning",message:"Error When Loading: "+s.library+". Try to solve it with `npm run rebuild` in Gateway directory",timer:1e4});break;case"ERROR":this.sendNotification("EXT_ALERT",{type:"error",message:"Error: "+s,timer:6e4});break;case"INITIALIZED":this.OthersRules.awaitGATimer(this);break;case"SendNoti":s.payload&&s.noti?this.sendNotification(s.noti,s.payload):this.sendNotification(s);break;case"SendStop":this.ActionsOnEXT.Actions(this,"EXT_STOP")}}});