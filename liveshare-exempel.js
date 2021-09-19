// skapa två variabel med två olika datatyper
const number = 15;
//number;
const access = true;
//bolean;
const data = ["Snowpiercer", "Ace Ventura", "Snow Dogs"];
//array;

let marcusarknott = false;
const timKnott = true;

let fridasNummer = 26;
const fridasNamn = "Frida"; // String
// skapa en funktion som använder en parameter för variablerna ovan.
const display = (access, number) => {
  access === true ? console.log(number) : console.log("You get nothing.");
};
display(false, undefined);

// skapa en for loop och hämta data från en array.
for (let i = 0; i < data.length; i++) {
  const arr = data[i];
  console.log(arr);
}
// loop genom en objekt
// u can loop through object with three methods:
//1.object.value
//2.object.keys
//3.object.entries
const frutis = {
  apple: 40,
  orange: 90,
  pear: 70,
};

const keys = Object.keys(frutis);
console.log(keys);
// använd en funktion som använder return.

function fridasData(fridasNummer, fridasNamn) {
  return `Mitt namn är ${fridasNamn} och jag är ${fridasNummer} år gammal`;
}

console.log(fridasData(fridasNummer, fridasNamn));
// One Liner.
const plus = (a, b) => a + b;

const hello = (a, b) => a * b;
// Ändra inte raden under.
console.log(plus(5, 6));

// Vad ni har svårt med

/**
 * promises
 * Async & Await
 * vår JS kurs var lite kaos så all repetition är bra för mig, faktorering
 * (Tommy) -> MongoDB/Mongoose, backend i helhet
 * Code Hacks.
 */
//
// Vad ni har lätt med
/**
 * (Tommy) -> backend i helhet - senior
 *
 */
