class Person {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  getFullName() {
    return this.name + " " + this.lastName;
  }
}
