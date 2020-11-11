const panels = document.querySelectorAll(".panel");

console.log(panels);

function toggleOpen() {
  this.classList.toggle("open");
}

// watch for the end of transition and which transition properties are over
function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
panels.forEach((panel) => panel.addEventListener("click", toggleOpen));

panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
