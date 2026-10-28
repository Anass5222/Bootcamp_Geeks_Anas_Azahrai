const array1 = [2];
const array2 = [2];
console.log(array1 === array2); // false

const obj1 = {};
const obj2 = {};
console.log(obj1 === obj2); // false

// Explication : array1 et array2 (comme obj1 et obj2) sont deux objets
// différents en mémoire. === compare les références, pas le contenu,
// donc le résultat est false.

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number); 
console.log(object3.number); 
console.log(object4.number); 

// Explication : object2 et object3 ne sont pas des copies, ils pointent vers
// le même objet que object1 (même référence). Modifier object1.number
// change donc la valeur pour les trois variables.
// object4 est un objet différent (créé avec son propre { }), donc il reste à 5.

// 1. Classe Animal
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// 2. Classe Mammal qui hérite de Animal

class Mammal extends Animal {
  sound(sound) {
    return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

// 3. Instance farmerCow
const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('Moooo'));

