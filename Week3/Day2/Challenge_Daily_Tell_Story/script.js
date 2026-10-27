
const form = document.getElementById("libform");
const storyElement = document.getElementById("story");
const shuffleButton = document.getElementById("shuffle-button");

// Garder les mots saisis par l'utilisateur
let words = null;

// Mémoriser l'histoire affichée
let previousStoryIndex = -1;

// Plusieurs histoires possibles
const stories = [
    function (w) {
        return `One day, ${w.person} found a ${w.adjective} ${w.noun}
in ${w.place} and decided to ${w.verb} it.`;
    },

    function (w) {
        return `In ${w.place}, ${w.person} saw a ${w.adjective}
${w.noun}. Suddenly, they started to ${w.verb}!`;
    },

    function (w) {
        return `${w.person} wanted to ${w.verb} a ${w.adjective}
${w.noun} in ${w.place}, but something strange happened.`;
    },

    function (w) {
        return `Yesterday, a ${w.adjective} ${w.noun} followed
${w.person} to ${w.place} and asked them to ${w.verb}.`;
    },

    function (w) {
        return `While visiting ${w.place}, ${w.person} discovered
a ${w.adjective} ${w.noun}. They decided to ${w.verb}
together!`;
    }
];

// Choisir et afficher une histoire aléatoire
function displayRandomStory() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * stories.length);
    } while (
        stories.length > 1 &&
        randomIndex === previousStoryIndex
    );

    previousStoryIndex = randomIndex;

    storyElement.textContent = stories[randomIndex](words);
}

// 1. Récupérer les valeurs quand le formulaire est envoyé
form.addEventListener("submit", function (event) {
    // Empêcher le rechargement de la page
    event.preventDefault();

    const noun = document.getElementById("noun").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();

    // 2. Vérifier que tous les champs sont remplis
    if (!noun || !adjective || !person || !verb || !place) {
        alert("Please fill in all the fields!");
        return;
    }

    // Conserver les mots pour les réutiliser avec Shuffle
    words = {
        noun: noun,
        adjective: adjective,
        person: person,
        verb: verb,
        place: place
    };

    // 3. Afficher une histoire
    previousStoryIndex = -1;
    displayRandomStory();
});

// Bonus : changer l'histoire sans modifier les mots
shuffleButton.addEventListener("click", function () {
    if (words === null) {
        alert("Please fill in the form and click Lib it first!");
        return;
    }

    displayRandomStory();
});

