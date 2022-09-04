/* eslint-disable linebreak-style */
import Vue from "vue";
import { Workbox } from "workbox-window";
import * as Sentry from "@sentry/browser";

import App from "./App.vue";
import router4 from "./components/Router";

if (window.location.href.includes("satvis.space")) {
  Sentry.init({ dsn: "https://0c7d1a82eedb48ee8b83d87bf09ad144@sentry.io/1541793" });
}

const app = new Vue({
  el: "#app",
  components: {
    app: App,
  },
  render: (h) => h(App),
  router: router4,
});

// Export Vue for debugger
window.app = app;

/* global cc */
// cc.sats.addFromTleUrl("data/tle/norad/active.txt", ["Active"]);
cc.sats.addFromTleUrl("data/tle/norad/spire.txt", ["Spire"]);
cc.sats.addFromTleUrl("data/tle/norad/planet.txt", ["行星公司"]);
cc.sats.addFromTleUrl("data/tle/norad/starlink.txt", ["Starlink"]);
cc.sats.addFromTleUrl("data/tle/norad/globalstar.txt", ["卫通（美）"]);
cc.sats.addFromTleUrl("data/tle/norad/resource.txt", ["资源"]);
cc.sats.addFromTleUrl("data/tle/norad/science.txt", ["科学"]);
cc.sats.addFromTleUrl("data/tle/norad/stations.txt", ["空间站"]);
cc.sats.addFromTleUrl("data/tle/norad/weather.txt", ["气象"]);
cc.sats.addFromTleUrl("data/tle/ext/move.txt", ["MOVE（德）"]);
cc.sats.addFromTleUrl("data/tle/norad/tle-new.txt", ["近期"]);

if (cc.sats.enabledTags.length === 0) {
  cc.sats.enableTag("MOVE");
}

// Register service worker
if ("serviceWorker" in navigator && !window.location.href.includes("localhost")) {
  const wb = new Workbox("sw.js");
  wb.addEventListener("controlling", (evt) => {
    if (evt.isUpdate) {
      console.log("Reloading page for latest content");
      window.location.reload();
    }
  });
  wb.register();
}
