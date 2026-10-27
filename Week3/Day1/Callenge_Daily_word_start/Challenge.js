function afficherMotsDansCadre(entreeUtilisateur) {
  // 1. Transformer l'entrée en tableau et nettoyer les espaces superflus
  let mots = entreeUtilisateur.split(",").map(mot => mot.trim());

  // Trouver la longueur du mot le plus long
  let longueurMax = 0;
  for (let i = 0; i < mots.length; i++) {
    if (mots[i].length > longueurMax) {
      longueurMax = mots[i].length;
    }
  }

  // Créer la bordure supérieure et inférieure en fonction du mot le plus long
  let bordure = "*".repeat(longueurMax + 4);

  // Afficher la bordure du haut
  console.log(bordure);

  // Afficher chaque mot sur une ligne, un en dessous de l'autre
  for (let i = 0; i < mots.length; i++) {
    let mot = mots[i];
    let espacesSupplementaires = " ".repeat(longueurMax - mot.length);
    console.log(`* ${mot}${espacesSupplementaires} *`);
  }

  // Afficher la bordure du bas
  console.log(bordure);
}

let motsSaisis = "Hello, World, in, a, frame";
afficherMotsDansCadre(motsSaisis);