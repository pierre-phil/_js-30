console.log("%c I am some great text", "font-size:3rem; background:orange");

//

const dogs = [
  { name: "Drew", age: 8 },
  { name: "Bibo", age: 3 },
  { name: "Josh", age: 7 },
];

dogs.forEach((el) => {
  console.groupCollapsed(`${el.name}`);
  console.log(`This is ${el.name}`);
  console.log(`${el.name} is ${el.age} years old`);
  console.log(`${el.name} is ${el.age * 7} human-age years old`);
  console.groupEnd(`${el.name}`);
});

//

console.time("fetching data");
fetch("https://api.github.com/users/pierre-phil")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });
