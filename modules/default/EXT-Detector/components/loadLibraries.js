var log=(...o)=>{};function libraries(o){o.config.debug&&(log=(...o)=>{console.log("[DETECTOR] [LIB]",...o)});let r=[{fs:"fs"},{os:"os"},{"../components/platform":"platform"},{"../components/rules":"rules"},{"../components/porcupine":"Porcupine"},{"@bugsounet/snowboy":"Snowboy"}],e=0;return new Promise((n=>{r.forEach((r=>{for(const[n,l]of Object.entries(r)){let r=n,i=l;try{o.lib[i]||("Snowboy"==i&&!o.Snowboy.length||"Porcupine"==i&&!o.Porcupine.length?log("Ignored:",r):(o.lib[i]=require(r),log("Loaded:",r,"->","this.lib."+i)))}catch(n){console.error("[DETECTOR] [LIB]",r,"Loading error!",n.toString()),o.sendSocketNotification("WARNING",{library:r}),e++,o.lib.error=e}}})),n(e),console.log("[DETECTOR] [LIB] All libraries loaded!")}))}exports.libraries=libraries;