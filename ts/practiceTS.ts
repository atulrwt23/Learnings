const add = (a: number, b: number): number => a + b;

const mul = (a: number, b: number): number => {
  if (b <= 1) {
    return a;
  }

  return add(a, mul(a, b - 1));
};

console.log(mul(2, 3));

type Person = { name: string; age: number };

const displayPersonInfo = ({ name, age }: Person) => {
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

const date: Date = new Date();

const greet = (person: string, date: Date) => {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
};

greet("Maddison", date);

const x: { a: number; b: number } = { a: 1, b: 2 };
console.log(x);

let c = "alice";
let y = "alice";

function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}

liveDangerously(121);

// Cautions of interface implementations

interface Checkable {
  check(name: string): boolean;
}

class NameChecker implements Checkable {
  check(s: string | number) {
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
  override greet(name?: string) {
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

enum Num {
  One = 1,
  Two,
  Three,
  Four,
}

console.log(Num.One);

let user: [number, string, null | string] = [1, "Atul", null];
user[2] = "Is this valid???";
