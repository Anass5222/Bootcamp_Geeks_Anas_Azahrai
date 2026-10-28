// 1. Transformer [[1],[2],[3],[[[4]]],[[[5]]]] en [1,2,3,[4],[5]] (sur une seule ligne)
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const newArray = array.flat(2);
console.log(newArray); // [1, 2, 3, [4], [5]]


// 2. Regrouper les mots de chaque sous-tableau en une seule chaîne
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const greetingJoined = greeting.map(words => words.join(" "));
console.log(greetingJoined); 

// 3. Transformer le tableau en une seule chaîne
const sentence = greetingJoined.join(" ");
console.log(sentence); 

// 4. Réduire les niveaux d'imbrication à un seul
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const result = trapped.flat(Infinity);
console.log(result); 
