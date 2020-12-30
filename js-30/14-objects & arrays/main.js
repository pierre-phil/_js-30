// start with strings, numbers and booleans

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;

console.log(players, team);

// You might think we can just do something like this:
team[3] = "Lux";

// team is just a reference to the original array players
// when we modify team, we modify players

// So, how do we fix this? We take a copy instead!

// one way

const team2 = players.slice();

// another way (more elegant imo)

const team3 = [].concat(players);

// THE BEST :
// or use the new ES6 Spread

const team4 = [...players];

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:

/*
const captain = person;
captain.number = 99;
*/

// how do we take a copy instead?

const capt2 = Object.assign({}, person, { number: 99, age: 12 });
// {} -> blank object
// person -> we write all the properties from that object into the blank one
// we modify the properties we want in that new object

console.log(capt2);

// THE BEST :
// We will hopefully soon see the object ...spread

const cap3 = { ...person, age: 17, number: 101 };

const wes = {
  name: "Wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer",
  },
};

console.clear();
console.log(wes);

const dev = Object.assign({}, wes);
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const dev2 = JSON.parse(JSON.stringify(wes));
