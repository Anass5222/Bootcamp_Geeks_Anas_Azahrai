// ===== 1 =====
const fruits = ["apple", "orange"];                                // déclare fruits : un tableau avec "apple" et "orange"
const vegetables = ["carrot", "potato"];                           // déclare vegetables : un tableau avec "carrot" et "potato"
const result = ['bread', ...vegetables, 'chicken', ...fruits];     // déclare result : 'bread', les 2 légumes (...vegetables), 'chicken', les 2 fruits (...fruits)
console.log(result);                                               // affiche result dans la console

// ===== 2 =====
const country = "USA";                                             // déclare country : la chaîne "USA" (3 caractères)
console.log([...country]);                                         // ...country donne chaque caractère ('U', 'S', 'A') ; [] les range dans un tableau

// ===== Bonus =====
let newArray = [...[,,]];                                          // [,,] est un tableau de 2 cases vides ; ... lit chaque case, une case vide donne undefined
console.log(newArray);                                             // affiche newArray dans la console

// ===== Output =====
// Output 1: [ 'bread', 'carrot', 'potato', 'chicken', 'apple', 'orange' ]  (les légumes et les fruits sont insérés à leur place)
// Output 2: [ 'U', 'S', 'A' ]  (chaque caractère devient un élément)
// Output Bonus: [ undefined, undefined ]  (deux vraies valeurs undefined, pas des trous)