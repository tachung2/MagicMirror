class Gateway{constructor(){console.log("[GA] Tools Ready")}SendToGateway(e,o){if(o.screen&&(o.screen.links.length>0||o.screen.photos.length>0)){let t={photos:o.screen.photos,urls:o.screen.links,youtube:null};logGA("Send response to Gateway:",t),e.sendNotification("EXT_GATEWAY",t)}else o.text&&(e.AssistantSearch.GoogleSearch(o.text)?e.sendSocketNotification("GOOGLESEARCH",o.transcription.transcription):e.AssistantSearch.YouTubeSearch(o.text)&&(logGA("Send response YouTube to Gateway:",o.transcription.transcription),e.sendNotification("EXT_GATEWAY",{photos:[],urls:[],youtube:o.transcription.transcription})))}sendGoogleResult(e,o){if(!o)return console.error("[GA] No link to open!");logGA("Send response to Gateway:",o),e.sendNotification("EXT_GATEWAY",{photos:[],urls:[o],youtube:null})}}