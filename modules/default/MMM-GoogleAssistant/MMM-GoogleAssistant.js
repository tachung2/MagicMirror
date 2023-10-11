logGA = (...s) => {}, Module.register("MMM-GoogleAssistant", { requiresVersion: "2.22.0", defaults: { debug: !1, stopCommand: "stop", assistantConfig: { lang: "en-US", latitude: 51.50853, longitude: -.076132, deviceRegistred: !1 }, responseConfig: { useFullscreen: !1, responseOutputCSS: "response_output.css", screenOutputTimer: 5e3, useChime: !0, confirmationChime: !0, chimes: { beep: "beep.mp3", error: "error.mp3", continue: "continue.mp3", confirmation: "confirmation.mp3", open: "Google_beep_open.mp3", close: "Google_beep_close.mp3", opening: "opening.mp3", closing: "closing.mp3", warning: "warning.ogg" }, imgStatus: { hook: "hook.gif", standby: "standby.gif", reply: "reply.gif", error: "error.gif", think: "think.gif", continue: "continue.gif", listen: "listen.gif", confirmation: "confirmation.gif", information: "information.gif", warning: "warning.gif", userError: "userError.gif" }, zoom: { transcription: "80%", responseOutput: "60%" } }, recipes: [] }, getScripts: function() { return ["/modules/default/MMM-GoogleAssistant/components/GAConfig.js", "/modules/MMM-GoogleAssistant/components/activateProcess.js", "/modules/MMM-GoogleAssistant/components/assistantResponse.js", "/modules/MMM-GoogleAssistant/components/assistantSearch.js", "/modules/MMM-GoogleAssistant/components/Gateway.js", "/modules/MMM-GoogleAssistant/components/Hooks.js"] }, getStyles: function() { return ["/modules/MMM-GoogleAssistant/MMM-GoogleAssistant.css", "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"] }, getTranslations: function() { return { en: "translations/en.json", fr: "translations/fr.json", it: "translations/it.json", de: "translations/de.json", es: "translations/es.json", nl: "translations/nl.json", pt: "translations/pt.json", ko: "translations/ko.json", el: "translations/el.json" } }, start: function() { this.GAConfig = new GAConfig(this) }, getDom: function() { var s = document.createElement("div"); return s.style.display = "none", s }, notificationReceived: function(s, t = null, e = null) { switch (this.Hooks.doPlugin(this, "onNotificationReceived", { notification: s, payload: t }), s) {
            case "GA_ACTIVATE":
                t && t.type && t.key ? this.activateProcess.assistantActivate(this, t) : this.activateProcess.assistantActivate(this, { type: "MIC" }); break;
            case "GA_FORCE_FULLSCREEN":
                if (this.config.responseConfig.useFullscreen) return logGA("Force Fullscreen: Already activated");
                this.GAConfig.forceFullScreen(this), logGA("Force Fullscreen: AssistantResponse Reloaded"); break;
            case "GA_STOP":
                this.assistantResponse.response && "reply" == this.GAStatus.actual && this.assistantResponse.conversationForceEnd() } }, socketNotificationReceived: function(s, t) { switch (s) {
            case "LOAD_RECIPE":
                this.Hooks.parseLoadedRecipe(t); break;
            case "NOT_INITIALIZED":
                this.assistantResponse.fullscreen(!0), this.assistantResponse.showError(this.translate(t.message, { VALUES: t.values })), this.assistantResponse.forceStatusImg("userError"); break;
            case "WARNING":
                this.sendNotification("EXT_ALERT", { message: this.translate(t), type: "warning", timer: 1e4 }); break;
            case "INFORMATION":
                break;
            case "ERROR":
                this.sendNotification("EXT_ALERT", { message: this.translate(t), type: "error" }); break;
            case "INITIALIZED":
                logGA("Initialized."), this.assistantResponse.Version(t), this.assistantResponse.status("standby"), this.Hooks.doPlugin(this, "onReady"), this.sendNotification("GA_READY"); break;
            case "ASSISTANT_RESULT":
                null !== t.volume && this.sendNotification("EXT_VOLUME-SPEAKER_SET", t.volume), this.assistantResponse.start(t); break;
            case "TUNNEL":
                this.assistantResponse.tunnel(t); break;
            case "ASSISTANT_ACTIVATE":
                this.activateProcess.assistantActivate(this, t); break;
            case "GOOGLESEARCH-RESULT":
                this.Gateway.sendGoogleResult(this, t) } }, EXT_TELBOTCommands: function(s) { s.add({ command: "query", description: this.translate("QUERY_HELP"), callback: "tbQuery" }), s.add({ command: "stop", description: this.translate("STOP_HELP"), callback: "tbStopEXT" }) }, tbQuery: function(s, t) { var e = t.args;
        e ? this.activateProcess.assistantActivate(this, { type: "TEXT", key: e }) : t.reply("TEXT", this.translate("QUERY_HELP")) }, tbStopEXT: function(s, t) { this.sendNotification("EXT_STOP"), t.reply("TEXT", this.translate("STOP_EXT")) } });