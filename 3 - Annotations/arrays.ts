export {};
const carMakers = ["ford", "toyota", "chevy"];

const makers: string = [];

const dates = [new Date(), new Date()];

const carsByMakers = [["f150"], ["corolla"], ["camaro"]];
const carsByMakers2: string[][] = [];

// Help with inference when extracting values

const car = carMakers[0]; // <- inferred string
const myCar = carMakers.pop(); // <- inferred string

// Prevent incompabible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car) => car.toLocaleUpperCase());

// Flexible types
const importantDates = [new Date(), "2030-10-10"]; // <-- inferred as  `(string | Date)[]`
const importantDates2: (Date | string)[] = [new Date()]; // <-- inferred as  `(string | Date)[]`

importantDates2.push("2030-10-10");
importantDates2.push(new Date());
importantDates2.push(100); // <- 🛑
