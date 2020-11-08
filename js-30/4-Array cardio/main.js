const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Loyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Minton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Hale",
  "Berry, Hendell",
  "Betha, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Anmbrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Franck",
  "Birrell, Augustine",
  "Black, Elik",
  "Blair, obert",
  "Blair, Tony",
  "Blake, William",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornInThe50s = () => {
  return inventors.filter((el) => el.year >= 1500 && el.year <= 1600);
};

console.log("Were born in the 50s :", bornInThe50s());

// Array.prototype.map()
// 2. Give us an array of the inventory first and last names
const inventoryNames = () => {
  return inventors.map((el) => el.first + " " + el.last);
};

console.log("Names :", inventoryNames());

// Array.prototype.sort()
// 3.Sort the inventors by birthdate, oldest to youngest

const inventorsDOB = () => {
  const arrayOfYears = [];
  const inventorsArray = inventors.forEach((el) => arrayOfYears.push(el.year));
  arrayOfYears.sort((a, b) => a - b);
  return arrayOfYears;
};

console.log("By date of birth :", inventorsDOB());
