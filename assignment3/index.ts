// index.ts
import { Rocket } from './Rocket.js';
import { Astronaut } from './Astronaut.js';
import { Cargo } from './Cargo.js';

// Create instances and run your simulation here
const myRocket = new Rocket('Chandrayan III', 10000);
const astronaut1 = new Astronaut(22, '"DAMU"');
const cargo1 = new Cargo(5000, 'Satellite');

myRocket.addAstronaut(astronaut1);
myRocket.addCargo(cargo1);

console.log(myRocket);
console.log(astronaut1);
console.log(cargo1);