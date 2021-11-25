export {};

const apples: number = 5;
let pears;
pears = 5;

let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;
let unknown: unknown;

let now: Date = new Date();
let date_now: number = Date.now();

let colours: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, false, true];

class Car {}

let car: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function

function logNumberFE(i: number): void {
  console.log(i);
}

const logNumberFA: (i: number) => void = (i: number) => {
  console.log(i);
};

//When to use annotations
// 1) Function that returns the 'any' type

{
  const json = '{"x":10, "y":20}';
  const coordinates = JSON.parse(json);
  console.log(coordinates); // <- any
}

{
  const json = '{"x":10, "y":20}';
  const coordinates: { x: number; y: number } = JSON.parse(json);
  console.log(coordinates);
  // @ts-ignore
  coordinates.aasd; //<-- issue
}

// 2) When we declare a var on one line & init later

let words = ["red", "green", "blue"];
let foundWord: boolean; //<- declaration

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true; //<- init
  }
}

// 3) Var whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
