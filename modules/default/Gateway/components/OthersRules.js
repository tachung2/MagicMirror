class OthersRules{constructor(){console.log("[GATEWAY] OthersRules Ready")}helloEXT(e,o){o===e.ExtDB.find((e=>e===o))?(e.GW[o].hello=!0,e.sendSocketNotification("HELLO",o),logGW("Hello,",o),this.onStartPlugin(e,o)):console.warn("[GATEWAY] Hi,",o,"what can i do for you ?")}onStartPlugin(e,o){o&&("EXT-Background"==o&&e.sendNotification("GA_FORCE_FULLSCREEN"),"EXT-Detector"==o&&setTimeout((()=>e.sendNotification("EXT_DETECTOR-START")),300),"EXT-Pages"==o&&e.sendNotification("EXT_PAGES-Gateway"),"EXT-Pir"==o&&e.sendNotification("EXT_PIR-START"),"EXT-Bring"==o&&e.sendNotification("EXT_BRING-START"))}connectEXT(e,o){if(!e.GW.GA_Ready)return console.error("[GATEWAY] Hey "+o+"!, MMM-GoogleAssistant is not ready");if(e.GW[o]&&!e.GW[o].connected){if(e.GW["EXT-Screen"].hello&&!this.hasPluginConnected(e.GW,"connected",!0)&&(e.GW["EXT-Screen"].power||e.sendNotification("EXT_SCREEN-WAKEUP"),e.sendNotification("EXT_SCREEN-LOCK"),e.GW["EXT-Motion"].hello&&e.GW["EXT-Motion"].started&&e.sendNotification("EXT_MOTION-DESTROY"),e.GW["EXT-Pir"].hello&&e.GW["EXT-Pir"].started&&e.sendNotification("EXT_PIR-STOP"),e.GW["EXT-StreamDeck"].hello&&e.sendNotification("EXT_STREAMDECK-ON"),e.GW["EXT-Bring"].hello&&e.sendNotification("EXT_BRING-STOP")),this.browserOrPhotoIsConnected(e))return logGW("Connected:",o,"[browserOrPhoto Mode]"),e.GW[o].connected=!0,this.lockPagesByGW(e,o),void e.sendSocketNotification("EXTStatus",e.GW);e.GW["EXT-Spotify"].hello&&e.GW["EXT-Spotify"].connected&&e.sendNotification("EXT_SPOTIFY-STOP"),e.GW["EXT-MusicPlayer"].hello&&e.GW["EXT-MusicPlayer"].connected&&e.sendNotification("EXT_MUSIC-STOP"),e.GW["EXT-RadioPlayer"].hello&&e.GW["EXT-RadioPlayer"].connected&&e.sendNotification("EXT_RADIO-STOP"),e.GW["EXT-YouTube"].hello&&e.GW["EXT-YouTube"].connected&&e.sendNotification("EXT_YOUTUBE-STOP"),e.GW["EXT-YouTubeCast"].hello&&e.GW["EXT-YouTubeCast"].connected&&e.sendNotification("EXT_YOUTUBECAST-STOP"),e.GW["EXT-FreeboxTV"].hello&&e.GW["EXT-FreeboxTV"].connected&&e.sendNotification("EXT_FREEBOXTV-STOP"),logGW("Connected:",o),logGW("Debug:",e.GW),e.GW[o].connected=!0,this.lockPagesByGW(e,o)}}disconnectEXT(e,o){if(!e.GW.GA_Ready)return console.error("[GATEWAY] MMM-GoogleAssistant is not ready");e.GW[o]&&e.GW[o].connected&&(e.GW[o].connected=!1,setTimeout((()=>{e.GW["EXT-Screen"].hello&&!this.hasPluginConnected(e.GW,"connected",!0)&&(e.sendNotification("EXT_SCREEN-UNLOCK"),e.GW["EXT-Motion"].hello&&!e.GW["EXT-Motion"].started&&e.sendNotification("EXT_MOTION-INIT"),e.GW["EXT-Pir"].hello&&!e.GW["EXT-Pir"].started&&e.sendNotification("EXT_PIR-START"),e.GW["EXT-StreamDeck"].hello&&e.sendNotification("EXT_STREAMDECK-OFF"),e.GW["EXT-Bring"].hello&&e.sendNotification("EXT_BRING-START")),e.GW["EXT-Pages"].hello&&!this.hasPluginConnected(e.GW,"connected",!0)&&e.sendNotification("EXT_PAGES-UNLOCK"),logGW("Disconnected:",o)}),1e3))}lockPagesByGW(e,o){e.GW["EXT-Pages"].hello&&(e.GW[o].hello&&e.GW[o].connected&&"number"==typeof e.GW["EXT-Pages"][o]?(e.sendNotification("EXT_PAGES-CHANGED",e.GW["EXT-Pages"][o]),e.sendNotification("EXT_PAGES-LOCK")):e.sendNotification("EXT_PAGES-PAUSE"))}browserOrPhotoIsConnected(e){return!!(e.GW["EXT-Browser"].hello&&e.GW["EXT-Browser"].connected||e.GW["EXT-Photos"].hello&&e.GW["EXT-Photos"].connected)&&(logGW("browserOrPhoto",!0),!0)}hasPluginConnected(e,o,t){if("object"==typeof e&&null!==e){if(e.hasOwnProperty(o))return!0;for(var n in e)if(e.hasOwnProperty(n)&&this.hasPluginConnected(e[n],o,t)&&e[n][o]==t)return!0}return!1}async awaitGATimer(e){if(clearInterval(e.awaitGATimer),e.awaitGATimer=null,e.GW.GA_Ready){if(await this.checkModules())return e.socketNotificationReceived("ERROR","You Can't start Gateway with MMM-TelegramBot and EXT-TelegramBot!");logGW("I'm Ready!"),e.GW.GW_Ready=!0,e.sendNotification("GW_READY")}else console.log("[GATEWAY] Waiting GA response"),e.awaitGATimer=setInterval((()=>{this.awaitGATimer(e)}),1e3)}checkModules(){return new Promise((e=>{var o=0;MM.getModules().withClass("EXT-Telegrambot MMM-TelegramBot").enumerate((t=>{++o>=2&&e(!0)})),e(!1)}))}}