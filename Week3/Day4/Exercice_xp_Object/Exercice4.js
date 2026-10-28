class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

// Output: object
// Explication : member est créé avec new Person('John'), c'est donc une
// instance de la classe Person. En JavaScript, une instance de classe
// est un objet, donc typeof member retourne "object".