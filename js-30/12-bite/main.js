const pressed = [];

const secretCode = "couille";

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  console.log("pressed.length - secretCode.length :", -secretCode.length - 1);
  console.log(
    "pressed.length - secretCode.length :",
    pressed.length - secretCode.length
  );
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  console.log(pressed);
  if (pressed.join("").includes(secretCode)) {
    console.log("Bravo connard");
    cornify_add();
  }
});
