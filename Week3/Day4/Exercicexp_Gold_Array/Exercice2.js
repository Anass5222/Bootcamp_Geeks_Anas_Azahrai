[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);

// Output: [1, 2, 0, 1, 2, 3]
// Explication : reduce() part de la valeur initiale [1, 2] (acc), puis
// parcourt chaque sous-tableau (cur) et le concatène à acc :
// - Étape 1 : acc = [1, 2], cur = [0, 1]  →  [1, 2, 0, 1]
// - Étape 2 : acc = [1, 2, 0, 1], cur = [2, 3]  →  [1, 2, 0, 1, 2, 3]
// concat() retourne un nouveau tableau avec les éléments de cur ajoutés
// à la fin, et reduce() retourne la dernière valeur de acc.