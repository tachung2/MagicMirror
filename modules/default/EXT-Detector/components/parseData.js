var _load=require("../components/loadLibraries.js"),log=(...o)=>{};async function init(o){o.config={},o.porcupine=null,o.porcupineConfig=[],o.snowboyConfig={},o.snowboy=null,o.Snowboy=[],o.Porcupine=[],o.porcupineCanRestart=!1,o.detector=!1,o.running=!1,o.lib={},o.PLATFORM_RECORDER=new Map,o.PLATFORM_RECORDER.set("linux","arecord"),o.PLATFORM_RECORDER.set("mac","sox"),o.PLATFORM_RECORDER.set("raspberry-pi","arecord"),o.PLATFORM_RECORDER.set("windows","sox"),o.detectorModel=0}async function parse(o){o.config.debug&&(log=(...o)=>{console.log("[DETECTOR] [DATA]",...o)}),await detectorFilter(o);let e,n=await _load.libraries(o);if(n)return void console.error("[DETECTOR] [DATA] Warning:",n,"needed library not loaded !");if(o.config.touchOnly)return console.log("[DETECTOR] [DATA] Ready with Touch Screen Feature only"),void o.sendSocketNotification("INITIALIZED");try{e=o.lib.platform.getPlatform(o)}catch(o){return console.error("[DETECTOR] [DATA] The NodeJS binding does not support that platform. Supported platforms include macOS (x86_64), Windows (x86_64), Linux (x86_64), and Raspberry Pi (1-4)"),void process.exit(1)}let i=o.PLATFORM_RECORDER.get(e);console.log(`[DETECTOR] [DATA] Platform: '${e}'; attempting to use '${i}' to access microphone ...`),o.config.mic.recorder=i,o.config.snowboyMicConfig.recorder=i,o.Porcupine.length&&(o.porcupineConfig.accessKey=o.config.porcupineAccessKey||null,o.porcupineConfig.customModel=o.config.porcupineCustomModel?__dirname+"/"+o.config.porcupineCustomModel:null,o.porcupineConfig.detectors=[],o.porcupineConfig.accessKey||o.sendSocketNotification("ACCESSKEY"),o.Porcupine.forEach((e=>{const n={};e.Model&&(n.Model=e.Model,n.Sensitivity=e.Sensitivity?e.Sensitivity:.7,o.porcupineConfig.detectors.push(n))})),log("Porcupine DetectorConfig:",o.porcupineConfig),o.porcupine=await new o.lib.Porcupine(o.porcupineConfig,o.config.mic,(e=>o.lib.rules.onDetected(o,"Porcupine",e)),o.config.debug),o.porcupine.init(),o.porcupine.initialized?o.porcupine.keywordNames&&o.porcupine.keywordNames.length&&(console.log("[DETECTOR] [DATA] Porcupine is initialized with",o.porcupine.keywordNames.length,"Models:",o.porcupine.keywordNames.toString()),o.detectorModel+=o.porcupine.keywordNames.length):o.sendSocketNotification("PORCUPINENOTINIT")),o.Snowboy.length&&(o.snowboyConfig=o.Snowboy,log("Snowboy DetectorConfig:",o.snowboyConfig),o.snowboy=await new o.lib.Snowboy.Snowboy(o.snowboyConfig,o.config.snowboyMicConfig,(e=>o.lib.rules.onDetected(o,"Snowboy",e)),o.config.debug),o.snowboy.init(),o.snowboy.modelsNumber()&&(console.log("[DETECTOR] [DATA] Snowboy is initialized with",o.snowboy.modelsNumber(),"Models:",o.snowboy.modelsNames()),o.detectorModel+=o.snowboy.modelsNumber())),o.detectorModel?(o.sendSocketNotification("INITIALIZED"),console.log("[DETECTOR] [DATA] Initialized")):(o.sendSocketNotification("NOT_INITIALIZED"),console.error("[DETECTOR] [DATA] No detector initialized!"))}function detectorFilter(o){return new Promise((e=>{o.Snowboy=o.config.detectors.filter((o=>"Snowboy"==o.detector)),o.Porcupine=o.config.detectors.filter((o=>"Porcupine"==o.detector)),e()}))}exports.init=init,exports.parse=parse;