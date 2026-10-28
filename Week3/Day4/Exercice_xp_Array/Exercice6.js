// Définition du tableau d'objets des étudiants
const students = [
  { name: "Ray", course: "Computer Science", isPassed: true }, 
  { name: "Liam", course: "Computer Science", isPassed: false }, 
  { name: "Jenner", course: "Information Technology", isPassed: true }, 
  { name: "Marco", course: "Robotics", isPassed: true }, 
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false }, 
  { name: "Jamie", course: "Big Data", isPassed: false }
];

// 1. Utilisation de la méthode filter() pour créer un nouveau tableau des étudiants admis
const passedStudents = students.filter(student => student.isPassed);

console.log("--- Tableau des étudiants admis ---");
// Affichage propre et détaillé du tableau filtré
console.log(JSON.stringify(passedStudents, null, 2));

// 2. Bonus : Chaînage de filter() avec forEach() pour les messages de félicitations
console.log("\n--- Messages de félicitations ---");
students
  .filter(student => student.isPassed)
  .forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
  });