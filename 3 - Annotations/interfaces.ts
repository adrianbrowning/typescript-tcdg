{
  const oldCivic = {
    name: "civic",
    year: 2020,
    broken: true
  };

  const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
  };
  printVehicle(oldCivic);
}

{
  interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
  }

  const oldCivic: Vehicle = {
    name: "civic",
    year: 2020,
    broken: true
  };

  const printVehicle = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
  };
  printVehicle(oldCivic);
}

{
  interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
  }

  const oldCivic: Vehicle = {
    name: "civic",
    year: new Date(2000),
    broken: true,
    summary(): string {
      return `Name ${this.name}, built ${this.year.getFullYear()} and is ${this.broken ? "" : "not"} broken`;
    }
  };

  const printVehicle = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
    console.log(vehicle.summary());
  };
  printVehicle(oldCivic);
}

{
  interface Reportable {
    summary(): string;
  }
  interface Vehicle extends Reportable {
    name: string;
    year: Date;
    broken: boolean;
  }

  const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
      return `My drink has ${this.sugar} grams of sugar`;
    }
  };

  const oldCivic: Vehicle = {
    name: "civic",
    year: new Date(2000),
    broken: true,
    summary(): string {
      return `Name ${this.name}, built ${this.year.getFullYear()} and is ${this.broken ? "" : "not"} broken`;
    }
  };

  const printSummary = (reportable: Reportable): void => {
    console.log(reportable.summary());
  };
  printSummary(oldCivic);
  printSummary(drink);
}
{
  type Reportable = {
    summary(): string;
  };
  type Vehicle = {
    name: string;
    year: Date;
    broken: boolean;
  };

  type Drink = {
    color: string;
    carbonated: boolean;
    sugar: number;
  };

  const drink: Drink & Reportable = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
      return `My drink has ${this.sugar} grams of sugar`;
    }
  };

  const oldCivic: Vehicle & Reportable = {
    name: "civic",
    year: new Date(2000),
    broken: true,
    summary(): string {
      return `Name ${this.name}, built ${this.year.getFullYear()} and is ${this.broken ? "" : "not"} broken`;
    }
  };

  const printSummary = (reportable: Reportable): void => {
    console.log(reportable.summary());
  };
  printSummary(oldCivic);
  printSummary(drink);
}
