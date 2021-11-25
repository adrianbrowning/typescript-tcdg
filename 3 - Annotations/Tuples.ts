const drink = {
  colour: "brown",
  carbonated: true,
  sugar: 40
};

const pepsi = ["brown", true, 40]; //const pepsi: (string | number | boolean)[]
pepsi[0] = 40; //<-- 🛑

type Drink = [string, boolean, number];
const pepsi2: [string, boolean, number] = ["brown", true, 40];

//@ts-ignore
pepsi2[0] = 40; //<- ✅

const coke: Drink = ["brown", true, 30];
const sprite: Drink = ["clear", true, 15];
const tea: Drink = ["brown", true, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};
