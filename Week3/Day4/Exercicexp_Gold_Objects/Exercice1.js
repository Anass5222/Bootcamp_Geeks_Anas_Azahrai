// displayStudentInfo (Exercicexp 2) : destructuration dans le corps de la fonction
function displayStudentInfo(objUser) {
  const { first, last } = objUser;
  return `Your full name is ${first} ${last}`;
}

// printFullName (Exercice 1) : destructuration directement dans les paramètres
function printFullName({ first, last }) {
  return `Your full name is ${first} ${last}`;
}

const student = { first: 'Elie', last: 'Schoppik' };

console.log(printFullName(student));


console.log(displayStudentInfo(student));


console.log(printFullName(student) === displayStudentInfo(student));


