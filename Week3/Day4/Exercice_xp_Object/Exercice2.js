function displayStudentInfo(objUser) {                   
    // la fonction reçoit un objet, qu'on appelle objUser
    // Déstructuration : on sort first et last de l'objet objUser
    const { first, last } = objUser;

    // On renvoie la phrase avec le prénom et le nom
    return `Your full name is ${first} ${last}`;
}

// Appel de la fonction avec un objet, puis affichage de la chaîne renvoyée
console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));

