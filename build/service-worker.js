/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
<<<<<<< HEAD
  "/deploy-react-portfolio/precache-manifest.e2e1c6e98df9ab2263c9e0e77321b74d.js"
=======
  "/deploy-react-portfolio/precache-manifest.f019c6711338562ee4c53c62ecebfeab.js"
>>>>>>> 7f1775dff60891c140ba0b4454b405420992f186
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/deploy-react-portfolio/index.html", {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});
