export {};

class Vehicle {
  color: string;
  broken: boolean = false;

  constructor(color: string, private wheels = 4, protected doors = 5, public weight = 200) {
    this.color = color;
  }

  protected drive(): void {
    console.log("broom broom");
  }
  honk(): void {
    console.log("beep!");
  }
  onlyHereForWheels(): void {
    console.log(`Has wheels ${this.wheels}`); //private
  }
}

const vehicle = new Vehicle("green");
// vehicle.drive();
vehicle.honk();
console.log(vehicle.color);
console.log(vehicle.broken);
console.log(vehicle.weight);

class Car extends Vehicle {
  constructor() {
    super("blue");
  }
  drive(): void {
    console.log("vroom!");
  }
  hasDoors(): void {
    console.log(`Has ${this.doors}`); //protected
  }
}

const car = new Car();
car.drive();
car.honk();
