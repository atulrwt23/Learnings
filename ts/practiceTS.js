const add = (a, b) => a + b;
const mul = (a, b) => {
  if (b <= 1) {
    return a;
  }
  return add(a, mul(a, b - 1));
};
console.log(mul(2, 3));
const displayPersonInfo = ({ name, age }) => {
  console.log(`Name: ${name} Age: ${age}`);
};
displayPersonInfo({ name: "Sarup", age: 24 });
// const value: string = Math.random() < 0.5 ? "a" : "b";
// if (value !== "a") {
//   // ...
// } else if (value === "b") {
//   // This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
//   // Oops, unreachable
// }
const date = new Date();
const greet = (person, date) => {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
};
greet("Maddison", date);
const x = { a: 1, b: 2 };
console.log(x);
let c = "alice";
let y = "alice";
function liveDangerously(x) {
  // No error
  console.log(x.toFixed());
}
liveDangerously(121);
class NameChecker {
  check(s) {
    // Parameter 's' implicitly has an 'any' type.
    // Notice no error here
    return s === "ok";
    // any
  }
}
const nc = new NameChecker();
//
class Base {
  greet() {
    console.log("Hello, world!");
  }
}
class Derived extends Base {
  greet(name) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}
const d = new Derived();
d.greet();
d.greet("reader");

const Num = {};

(function (Num) {
  Num[(Num["One"] = 1)] = "One";
  Num[(Num["Two"] = 2)] = "Two";
  Num[(Num["Three"] = 3)] = "Three";
  Num[(Num["Four"] = 4)] = "Four";
})(Num || (Num = {}));

console.log(Num.One);
const user = [1, "Atul", null];
user[2] = "Is this valid???";

const num = 123_234;
console.log(num);
