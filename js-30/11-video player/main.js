/* get elements */

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

/* functions */

function togglePlay() {
  video[video.paused ? "play" : "pause"]();
}

function updateBtn() {
  toggle.textContent = this.paused ? "►" : "❚❚";
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  console.log(e);
}

/* event liteners */

video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);

video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);

video.addEventListener("timeupdate", handleProgress);
// fires when video updates its timecode (= when it's played)

let mousedown = false;

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => {
  mousedown && scrub(e);
});
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

skipButtons.forEach((button) => button.addEventListener("click", skip));

ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);
