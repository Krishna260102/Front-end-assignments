// Rocket.ts
import { Payload } from './Payload.js';
import { Astronaut } from './Astronaut.js';
import { Cargo } from './Cargo.js';

class Rocket {
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];

  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  sumMass(items: Payload[]): number {
    return items.reduce((sum, item) => sum + item.massKg, 0);
  }

  currentMassKg(): number {
    return this.sumMass([...this.astronauts, ...this.cargoItems]);
  }

  canAdd(item: Payload): boolean {
    return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
  }

  addCargo(cargo: Cargo): boolean {
    if (this.canAdd(cargo)) {
      this.cargoItems.push(cargo);
      return true;
    }
    return false;
  }

  addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd(astronaut)) {
      this.astronauts.push(astronaut);
      return true;
    }
    return false;
  }
}

export { Rocket };
