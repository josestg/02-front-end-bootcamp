// entry point for javascript.

// import { decrement as decrementRecursive, fibonacci } from "./rekursif.js";
import { decrementRecursive, message, iter as iterator } from "./rekursif.js";
import fib from "./rekursif.js";

// import * as recursive from "./rekursif.js";

function decrement(n) {
  console.log(n);
}

decrement(10);
decrementRecursive(10);
console.log(fib(20));
console.log(message);

iterator();
