let age = 18;
let adult = age >= 18;

console.log(adult);

if (age >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}

const person = {
  name: "Juan",
  lastName: "Pedraza",
  getFullName() {
    return this.name + " " + this.lastName;
  },
};

console.log(person.getFullName());

function greet(name) {
  console.log(`hi: ${name}`);
}

function logGreet(fn, name) {
  fn(name);
}

const greetFn = (name) => {
  console.log(`hi: ${name}`);
};

greet("Juan");
//Llamado callback
logGreet(greet, "Juan");
greetFn("Pedro");
