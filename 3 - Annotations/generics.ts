class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}
const ns = new ArrayOfNumbers([1, 2, 3]);
class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

const ss = new ArrayOfStrings(["a", "b", "c"]);

class ArrayOfSomething<Type> {
  constructor(public collection: Type[]) {}
  get(index: number): Type {
    return this.collection[index];
  }
}
const s1 = new ArrayOfSomething(["a", "b"]); //<string>
const n1 = new ArrayOfSomething([1, 2, 3]); //<number>
const d1 = new ArrayOfSomething([new Date(), new Date()]); //<Date>

//Example of Generics with functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<Type>(arr: Type[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything([1, 2, 3]);
printAnything<number>([1, 2, 3]);

// @ts-ignore
printAnything<string>([1, 2, 3]);

// Generic Constraints

class Car {
  print(): void {
    console.log(`I am a car`);
  }
}

class House {
  print(): void {
    console.log(`I am a house`);
  }
}

interface iPrintable {
  print(): void;
}

function printHousesOrCars<T extends iPrintable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

//  @ts-ignore printHousesOrCars([1, 2, 3]);

printHousesOrCars<Car>([new Car(), new Car()]);

printHousesOrCars<House>([new House(), new House()]);
