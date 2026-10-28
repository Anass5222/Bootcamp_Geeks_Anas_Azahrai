class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
 

// 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};

// Incorrect : dans une classe fille, il faut appeler super() avant
// d'utiliser this. Ici super() est absent, donc ReferenceError.

// 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

// Correct : super(name) appelle le constructor de Dog (qui définit this.name)
// avant d'utiliser this.size.

// 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};

// Incorrect : name n'est pas un paramètre du constructor, donc
// ReferenceError: name is not defined (dans un navigateur, name vaudrait
// window.name, une valeur incorrecte).

// 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};

// Incorrect : this est utilisé avant super(), donc ReferenceError.
// Il faut écrire super(name) à la place de this.name = name.
