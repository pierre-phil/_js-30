const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

console.log(checkboxes);

let last;

function handleCheck(e) {
  console.log(e);
  let inBetween = false;
  // check if shift is pressed
  // and check that we are checking the box, not unchecking
  if (e.shiftKey && this.checked) {
    // that the conditions we want, then loop over every checkbox :
    checkboxes.forEach((el) => {
      console.log(el);
      if (el === this || el === last) {
        // el === this -> the checkbox we just checked should be equal to this
        // if we click on the second checkbox, the first is not equal to this but the second is equal to this
        inBetween = !inBetween;
      }
      if (inBetween) {
        el.checked = true;
      }
    });
  }
  last = this;
  console.warn("last", last);
}

checkboxes.forEach((el) => el.addEventListener("click", handleCheck));
