const CACHE_NAME = "savorly-v1"

self.addEventListener("install", event => {
  console.log("SW installed")
  self.skipWaiting()
})

self.addEventListener("activate", event => {
  console.log("SW activated")
})

self.addEventListener("fetch", event => {
  // enkel pass-through (ingen caching enda)
})
