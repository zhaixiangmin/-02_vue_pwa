importScripts("/precache-manifest.4a157c8542e37e3b08cb3c1d6eba2c58.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "02_vue_pwa"});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// 动态ajax请求的缓存
workbox.routing.registerRoute(function (obj) {
  // console.log('obj', obj);
  // console.log('obj.url', obj.url);
  // 返回是否缓存结果
  if (obj.url.pathname.includes('findImageByType')) {
    return true;
  } else {
    return false;
  }
  // 缓存策略
}, workbox.strategies.cacheFirst());

