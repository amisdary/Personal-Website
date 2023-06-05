import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const backgroundVideo = document.getElementById("background-video");
const overlayVideo = document.getElementById("overlay-video");

var backgroundVideoDuration: number = 0;
var overlayVideoDuration: number = 0;

if (backgroundVideo instanceof HTMLVideoElement && overlayVideo instanceof HTMLVideoElement) {
  backgroundVideoDuration = backgroundVideo.duration;
  overlayVideoDuration = overlayVideo.duration;
}

//use the shorter video to create the scrollbar length
const maximumVideoDuration: number = Math.max(backgroundVideoDuration, overlayVideoDuration)

// Accessing the scrollbar element
// var scrollbar = document.getElementById("scrollbar");
var scrollbar = document.querySelector(".scrollbar") as HTMLElement;

// Updating the scrollbar height based on the video duration
if (scrollbar) {
  // backgroundVideo?.addEventListener("timeupdate", function () {
  //   // Calculating the scrollbar height ratio
  //   const duration = minimumVideoDuration;
  //   if (backgroundVideo instanceof HTMLVideoElement) {
  //     const currentTime = backgroundVideo.currentTime;
  //     const ratio = currentTime / duration;
  //     // Applying the scrollbar height ratio
  //     const scrollbarHeight = ratio * 100; // Multiply by 100 to convert ratio to percentage
  //     if (scrollbar.style) {
  //       scrollbar.style.height = scrollbarHeight + "%";
  //     }
  //   }
  // });

  backgroundVideo?.addEventListener("canplaythrough", function () {
    if (backgroundVideo instanceof HTMLVideoElement) {
      // Calculating the scrollbar height ratio
      const videoDuration = maximumVideoDuration;
      const currentVideoTime = backgroundVideo.currentTime;

      const containerHeight = scrollbar.clientHeight;
      const scrollbarHeight = scrollbar.offsetHeight;

      const maxScrollbarPosition = containerHeight - scrollbarHeight;
      const scrollbarPosition = (currentVideoTime / videoDuration) * 100; // Percentage value

      // Set the position of the scrollbar
      scrollbar.style.top = (maxScrollbarPosition * scrollbarPosition) / 100 + "px";
    }
  });

  backgroundVideo?.addEventListener("timeupdate", function () {
    // Calculating the scrollbar height ratio
    if (backgroundVideo instanceof HTMLVideoElement) {
      const videoDuration = maximumVideoDuration;
      const currentVideoTime = backgroundVideo.currentTime;

      const containerHeight = scrollbar.clientHeight;
      const scrollbarHeight = scrollbar.offsetHeight;

      const maxScrollbarPosition = containerHeight - scrollbarHeight;
      const scrollbarPosition = (currentVideoTime / videoDuration) * 100; // Percentage value

      // Set the position of the scrollbar
      scrollbar.style.top = (maxScrollbarPosition * scrollbarPosition) / 100 + "px";
    }
  });
}




