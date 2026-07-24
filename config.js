// ============================================================================
// config.js  —  shared settings for BOTH pilot.html (RC bridge) and
//               m3m_dashboard.html (browser). Both read window.APP_CONFIG.
//
// This is a STATIC file: it only *provides* values (it does not save/store
// anything). Edit the values here, place this file next to pilot.html /
// m3m_dashboard.html, and reload the page.
//
// SECURITY: this holds your DJI license + MQTT password. When served from a
// public host, anyone who can load it can read these. Keep such a host behind
// auth, and do NOT commit this file to git (add `config.js` to .gitignore).
// ============================================================================
window.APP_CONFIG = {

  // ---- DJI Cloud API app (used by pilot.html) ------------------------------
  // Use the values that CURRENTLY verify (platformVerifyLicense => data:true).
  // NOTE: this appKey from .env is 31 chars — DJI keys are normally 32 hex.
  //       If license verification fails locally, this is the first thing to fix
  //       (paste the exact key that works on your remote).
  appId:       "189829",
  appKey:      "49ce3f8b66013157b5539d7f22a9012",
  appLicense:  "AszZrtQQTpDUOwBMwHkRHd36BAjverKpT0mQPvV/+couff0YM/hYWAaFxUsGFLT3mxVZLdS2YXbYiDhHjU5DNnfsGLkVXlOO78ewR45MPXfrAfK3n0EB8KnwJSeOBooD/aZUSJU9tARDkNEhmRDEDfYSBsbGp1hrq0R7mTsSkFY=",

  // Workspace id MUST be a valid UUID (Pilot 2 calls UUID.fromString on it).
  workspaceId: "a1b2c3d4-5e6f-4a7b-8c9d-0e1f2a3b4c5d",

  // ---- MQTT broker ---------------------------------------------------------
  // pilot.html (RC) connects natively over TCP/TLS:
  brokerHost:  "mqtt.djidock.idea8.cloud",
  brokerPort:  "8883",
  brokerTls:   true,               // port 8883 = mqtts (TLS) -> ssl:// scheme

  // m3m_dashboard.html (browser) connects over WebSocket-Secure. A browser
  // CANNOT use mqtts://:8883 — confirm the wss port/path from your broker
  // (EMQX often uses :8084/mqtt; may be proxied on :443).
  brokerWsUrl: "wss://mqtt.djidock.idea8.cloud:443/mqtt",

  // Broker login (both sides). The cloud broker is NOT anonymous.
  mqttUser:    "backend",
  mqttPass:    "YebiwOH9",
  clientPrefix:"djidock",

  // ---- Live video (dashboard) ----------------------------------------------
  // Browser playback endpoint. This may be an HTTPS reverse-proxy path.
  mediaHost:   "https://camera.djidock.idea8.cloud/dock-camera",

  // RTMP ingest URL sent to DJI live_start_push. Keep this as the actual RTMP
  // endpoint the RC/drone can reach; do not derive it from the playback URL.
  mediaPushUrl:"rtmp://camera.djidock.idea8.cloud:1935/dock-camera",

  // Exact browser playback URLs from the VPS stream server. Set these to
  // the stream server output URL if it is not a MediaMTX-style path.
  mediaHlsUrl: "https://camera.djidock.idea8.cloud/dock-camera/index.m3u8",
  mediaWhepUrl:"https://camera.djidock.idea8.cloud/dock-camera/"
};
