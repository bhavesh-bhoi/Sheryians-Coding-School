let downloadBtn = document.querySelector("button");
let progress = document.querySelector(".progress-bar");
let percent = document.querySelector("#percent");
let progressPercent = 0;

let progressTime = null; // track interval
let isDownloading = false; // guard flag

downloadBtn.addEventListener("click", function () {
  // block if already downloading or already completed
  if (isDownloading || progressPercent >= 100) return;

  isDownloading = true;

  progressTime = setInterval(() => {
    progressPercent++;
    downloadBtn.innerHTML = "Downloading";
    progress.style.width = progressPercent + "%";
    percent.innerHTML = progressPercent + "%";

    if (progressPercent >= 100) {
      progressPercent = 100; // hard cap
      downloadBtn.innerHTML = "Download Completed";
      clearInterval(progressTime);
      isDownloading = false;
    }
  }, 100);

  setTimeout(() => {
    clearInterval(progressTime);
    isDownloading = false;
  }, 10000);
});




// let downloadBtn = document.querySelector("button");
// let progress = document.querySelector(".progress-bar");
// let percent = document.querySelector("#percent");
// let progressPercent = 0;

// downloadBtn.addEventListener("click", function () {
//   let progressTime = setInterval(() => {
//     progressPercent++;
//     downloadBtn.innerHTML = "Downloading";
//     progress.style.width = progressPercent + "%";
//     percent.innerHTML = progressPercent + "%";

//     if (progressPercent === 100) {
//       downloadBtn.innerHTML = "Download Completed";
//     }
//   }, 100);

//   setTimeout(() => {
//     clearInterval(progressTime);
//   }, 10000);
// });
