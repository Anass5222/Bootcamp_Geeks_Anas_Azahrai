[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});

// Output: [2, 4, 6]
// Explication : map() parcourt chaque élément et retourne un nouveau tableau
// avec les valeurs retournées par la fonction. Ici 1, 2 et 3 sont tous de
// type 'number', donc la condition est vraie et on retourne num * 2.
// Le "return ;" (qui retournerait undefined) n'est jamais atteint.