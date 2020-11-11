const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornInThe50s = () =>
  inventors.filter((el) => el.year >= 1500 && el.year <= 1600);

console.table("Were born in the 50s :", bornInThe50s());

// Array.prototype.map()
// 2. Give us an array of the inventory first and last names
const inventoryNames = () => inventors.map((el) => el.first + " " + el.last);

console.log("Names :", inventoryNames());

// Array.prototype.sort()
// 3.Sort the inventors by birthdate, oldest to youngest

const inventorsDOB = () => {
  const arrayOfYears = [];
  inventors.forEach((el) => arrayOfYears.push(el.year));
  arrayOfYears.sort((a, b) => a - b);
  return arrayOfYears;
};

const inventorsBorn = inventorsDOB();
console.log("Dates of birth :", inventorsBorn);

// Array.prototype.reduce()
// 4. How many years did all the inventors live ?

const inventorsDOD = () => {
  const arrayOfYears = [];
  inventors.forEach((el) => arrayOfYears.push(el.passed));
  arrayOfYears.sort((a, b) => a - b);
  return arrayOfYears;
};

const inventorsDeath = inventorsDOD();
console.log("Dates of death", inventorsDeath);

const totalDOB = inventorsBorn.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

const totalDOD = inventorsDeath.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

const yearsLived = totalDOD - totalDOB;
console.log(`The inventors lived ${yearsLived} years in total`);

// 5. Sort the inventors by years lived
const oldest = inventors.sort(function (a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
});

console.table("oldest", oldest);

// 6. Create a list of boulevards in Paris that contains "de" anywhere in the name

const boulevardsInParis = [
  `Boulevard Auguste-Blanqui`,
  `Boulevard Barbès`,
  `Boulevard Beaumarchais`,
  `Boulevard de l'Amiral-Bruix`,
  `Boulevard Mortier`,
  `Boulevard Poniatowski`,
  `Boulevard Soult`,
  `Boulevard des Capucines`,
  `Boulevard de la Chapelle`,
  `Boulevard de Clichy`,
  `Boulevard du Crime`,
  `Boulevard du Général-d'Armée-Jean-Simon`,
  `Boulevard Haussmann`,
  `Boulevard de l'Hôpital`,
  `Boulevard des Italiens`,
  `Boulevard Lefebvre`,
  `Boulevard de la Madeleine`,
  `Boulevard de Magenta`,
  `Boulevard Marguerite-de-Rochechouart`,
  `Boulevard Montmartre`,
  `Boulevard du Montparnasse`,
  `Boulevard Raspail`,
  `Boulevard Richard-Lenoir`,
  `Boulevard Saint-Germain`,
  `Boulevard Saint-Michel`,
  `Boulevard de Sébastopol`,
  `Boulevard de Strasbourg`,
  `Boulevard du Temple`,
  `Boulevard Voltaire`,
  `Boulevard de la Zone`,
];

const filteredBoulevards = boulevardsInParis.filter((el) => el.includes(`de`));

console.log("filteredBoulevards", filteredBoulevards);

// 7. Sort the people alphabetically by last name

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

const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", ");
  const [bLast, bFirst] = nextOne.split(", ");
  return aLast - bLast;
});

console.log(alpha);

// 8. Sum up the instances of each of these

const data = [
  "car",
  "car",
  "tryck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
