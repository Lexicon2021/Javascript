// String
let cat = "Vincent";
const theCake = "a lie";
const carName = "Volvo";
cat = "Vincent the great";

// Array
const fruits = ["apple", "banana", "strawberries", "grapes", "orange"];
const schedule = ["eat", "watch TV", "sleep"];
let animals = ["cat", "fox", "dog", "turtle"];
// Object
const car = {
  type: "Volvo",
  model: "v70",
  year: 2035,
  snygg: false,
};

//function
function sayHey(value) {
  return value;
}

function color() {
  return "red";
}

function hello() {
  return "Hello World!";
}

const addUpVariables = (num1, num2) => num1 + num2;
addUpVariables(2, 2);
console.log(addUpVariables);
const sayHey = () => {
  let a = 1;
  a = 2.3;

  const pi = 3.13;

  console.log(
    navigator.geolocation.getCurrentPosition(
      (pos) => pos.coords.latitude,
      pos.coords.longitude
    )
  );
  return a + pi;
};

// conditional statement
if ("100" === 100) {
  console.log("WOW!");
} else if ("100" == 100) {
  console.log("Also WOW");
} else {
  console.log("No wow...");
}

console.log(true ? "whoooo" : "no wohooooo");

if ("remove head from derriere") {
  console.log("good, you're awake");
} else {
  console.log("go back to bed");
}
if (color == red) {
}

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
