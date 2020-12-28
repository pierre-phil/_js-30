function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImage = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  console.count(e);
  console.log("scrollY", window.scrollY);
  sliderImage.forEach((el) => {
    // half way through the image
    const slideInAt = window.scrollY + window.innerHeight - el.height / 2;
    console.log("slideInAt", slideInAt);
    // bottom of the image
    const imageBottom = el.offsetTop + el.height;
    const isHalfShown = slideInAt > el.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
