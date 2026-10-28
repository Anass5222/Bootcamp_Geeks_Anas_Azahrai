const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})

// Réponse : i est l'index (la position) de l'élément courant dans le tableau.
// Il commence à 0 et augmente de 1 à chaque itération : 0, 1, 2, 3, 4, 5.
// Explication : map() appelle la fonction avec 3 arguments : l'élément (num),
// son index (i) et le tableau lui-même. Ici on utilise seulement num et i.
// À la fin, newArray vaut [2, 4, 8, 10, 16, 18].