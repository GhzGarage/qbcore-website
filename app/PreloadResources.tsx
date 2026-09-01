"use client";

import ReactDOM from "react-dom";

// The hero <h1> is the LCP element and renders in font-brand, but the Gilroy
// faces are only discovered after globals.css is parsed. Preloading hoists
// that fetch to the first chunk of HTML.
//
// Only the two weights used above the fold — extrabold for the h1, regular
// for body copy. Preloading all four would make them compete for bandwidth
// with the two that actually block first paint.
//
// The Metadata API has no field for rel="preload"; ReactDOM.preload is the
// documented route.
export default function PreloadResources() {
  ReactDOM.preload("/fonts/gilroy-extrabold.woff2", {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  });
  ReactDOM.preload("/fonts/gilroy-regular.woff2", {
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  });

  return null;
}
