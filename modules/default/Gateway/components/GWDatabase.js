class GWDatabase{constructor(){console.log("[GATEWAY] Database Ready")}ExtDB(){return["EXT-Alert","EXT-Background","EXT-Bring","EXT-Browser","EXT-Detector","EXT-FreeboxTV","EXT-GooglePhotos","EXT-Governor","EXT-Internet","EXT-Keyboard","EXT-Librespot","EXT-MusicPlayer","EXT-Motion","EXT-Pages","EXT-Photos","EXT-Pir","EXT-RadioPlayer","EXT-Screen","EXT-ScreenManager","EXT-ScreenTouch","EXT-Selfies","EXT-SelfiesFlash","EXT-SelfiesSender","EXT-SelfiesViewer","EXT-Spotify","EXT-SpotifyCanvasLyrics","EXT-StreamDeck","EXT-TelegramBot","EXT-UpdateNotification","EXT-Volume","EXT-Welcome","EXT-YouTube","EXT-YouTubeCast"]}async createGW(e){let o={GA_Ready:!1,GW_Ready:!1};return await Promise.all(e.ExtDB.map((e=>{o[e]={hello:!1,connected:!1}}))),o["EXT-Motion"].started=!1,o["EXT-Pir"].started=!1,o["EXT-Screen"].power=!0,o["EXT-UpdateNotification"].update={},o["EXT-UpdateNotification"].npm={},o["EXT-Spotify"].remote=!1,o["EXT-Spotify"].play=!1,o["EXT-Volume"].speaker=0,o["EXT-Volume"].isMuted=!1,o["EXT-Volume"].recorder=0,o["EXT-SpotifyCanvasLyrics"].forced=!1,o["EXT-Pages"].actual=0,o["EXT-Pages"].total=0,o}}