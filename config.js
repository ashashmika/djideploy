// SECURITY: this holds your DJI license + MQTT password. When served from a
// public host, anyone who can load it can read these. Keep such a host behind
// auth, and do NOT commit this file to git (add `config.js` to .gitignore).
// ============================================================================
window.APP_CONFIG = {
  // ---- DJI Cloud API app (used by remote.html) -----------------------------
  // Use the values that CURRENTLY verify (platformVerifyLicense => data:true).

  appId:       "189829",
  appKey:      "49ce3f8b66013157b5539d7f22a9012",
  appLicense:  "AszZrtQQTpDUOwBMwHkRHd36BAjverKpT0mQPvV/+couff0YM/hYWAaFxUsGFLT3mxVZLdS2YXbYiDhHjU5DNnfsGLkVXlOO78ewR45MPXfrAfK3n0EB8KnwJSeOBooD/aZUSJU9tARDkNEhmRDEDfYSBsbGp1hrq0R7mTsSkFY=",

  // Workspace id MUST be a valid UUID (Pilot 2 calls UUID.fromString on it).

  workspaceId: "a1b2c3d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d",

  // ---- MQTT broker ---------------------------------------------------------
  // remote.html (RC) connects natively over TCP/TLS:
  brokerHost:  "mqtt.djidock.idea8.cloud",
  brokerPort:  "8883",
  brokerTls:   true,               // port 8883 = mqtts (TLS) -> ssl:// scheme

  // dashboard.html (browser) connects over WebSocket-Secure. A browser
  // CANNOT use mqtts://:8883 - confirm the wss port/path from your broker
  // (EMQX often uses :8084/mqtt; may be proxied on :443).

  brokerWsUrl: "wss://mqtt.djidock.idea8.cloud:443/mqtt",

  // Broker login (both sides). The cloud broker is NOT anonymous.

  mqttUser:    "backend",
  mqttPass:    "YebiwOH9",
  clientPrefix:"djidock",

  mqttTopics: [
    "thing/product/+/osd",
    "thing/product/+/state",
    "sys/product/+/status",
    "thing/product/+/status",
    "Dock/DJI/+",
    "Drone/DJI/+",
    "RemoteController/DJI/+",
    "Dock/DJI",
    "Drone/DJI",
    "RemoteController/DJI"
  ],

  // Static remote.html login gate. This is convenience only; use
  // Cloudflare Access or a backend for real production security.

  remoteLoginUser:"pilot",
  remoteLoginPass:"1234",

  // ---- Live video: RTMP ingest --------------------------------------------
  // RTMP ingest URL sent to DJI live_start_push. Keep this as the actual RTMP
  // endpoint the RC/drone can reach; do not derive it from the playback URL.
  // Old MediaMTX ingest:
 //mediaPushUrl:"rtmp://lss.heronairbridgedev.com:1935/405862880188/CamA",

  //mediaPushUrl:"rtmp://camera.djidock.idea8.cloud:1935/dock-camera",

  mediaPushUrl:"rtmp://lss.heronairbridgedev.com:1935/183594714300/CamA",

  // ---- Live video: browser playback ---------------------------------------
  // Browser playback endpoint. This may be an HTTPS reverse-proxy path.
  // IMPORTANT: RTMP cannot be opened directly by a browser. Leave this blank
  // until the client provides a real HLS/WebRTC/WHEP playback endpoint.
  // Old MediaMTX host:
  //mediaHost:   "https://lss.heronairbridgedev.com/405862880188/CamA",

  //mediaHost:   "https://camera.djidock.idea8.cloud/dock-camera",

  mediaHost:   "https://lss.heronairbridgedev.com/183594714300/CamA",

  // Exact browser playback URLs from the stream server. Set these to
  // the stream server output URL if it is not a MediaMTX-style path.
  // Old MediaMTX playback:
  //mediaHlsUrl: "https://lss.heronairbridgedev.com/405862880188/CamA/index.m3u8",
  //mediaWhepUrl:"",
  //mediaWebRtcPageUrl:"https://lss.heronairbridgedev.com/405862880188/CamA/"
  
  //mediaHlsUrl: "https://camera.djidock.idea8.cloud/dock-camera/index.m3u8",
  //mediaWebRtcPageUrl:"https://camera.djidock.idea8.cloud/dock-camera/",

  mediaHlsUrl: "https://lss.heronairbridgedev.com/183594714300/CamA/index.m3u8",
  //mediaWhepUrl:"",
  mediaWebRtcPageUrl:"https://lss.heronairbridgedev.com/183594714300/CamA/"
};
