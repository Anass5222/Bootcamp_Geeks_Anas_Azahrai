
const planets = [
    {
        name: "Mercury",
        color: "#9E9E9E",
        moons: []
    },
    {
        name: "Venus",
        color: "#D4A373",
        moons: []
    },
    {
        name: "Earth",
        color: "#2878D0",
        moons: ["Moon"]
    },
    {
        name: "Mars",
        color: "#D9534F",
        moons: ["Phobos", "Deimos"]
    },
    {
        name: "Jupiter",
        color: "#C9A078",
        moons: ["Io", "Europa", "Ganymede", "Callisto"]
    },
    {
        name: "Saturn",
        color: "#E8D293",
        moons: ["Titan", "Enceladus", "Rhea"]
    },
    {
        name: "Uranus",
        color: "#7FDBDA",
        moons: ["Titania", "Oberon", "Miranda"]
    },
    {
        name: "Neptune",
        color: "#4169E1",
        moons: ["Triton", "Nereid"]
    }
];

// Récupérer la section du HTML
const listPlanets = document.querySelector(".listPlanets");

// Organiser les planètes dans la section
listPlanets.style.display = "flex";
listPlanets.style.flexWrap = "wrap";
listPlanets.style.alignItems = "center";
listPlanets.style.gap = "50px";
listPlanets.style.padding = "30px";

// Parcourir chaque planète
planets.forEach(function(planet) {

    // 1. Créer la planète
    const planetDiv = document.createElement("div");

    // 2. Ajouter la classe planet
    planetDiv.classList.add("planet");

    // 3. Donner une couleur différente à chaque planète
    planetDiv.style.backgroundColor = planet.color;

    // Afficher le nom de la planète
    planetDiv.textContent = planet.name;
    planetDiv.style.color = "white";
    planetDiv.style.display = "flex";
    planetDiv.style.alignItems = "center";
    planetDiv.style.justifyContent = "center";
    planetDiv.style.fontSize = "12px";

    // 4. Créer les lunes de cette planète
    planet.moons.forEach(function(moonName, index) {

        const moonDiv = document.createElement("div");

        moonDiv.classList.add("moon");
        moonDiv.title = moonName;

        // Positionner les lunes autour de la planète
        const angle =
            (2 * Math.PI * index) / planet.moons.length - Math.PI / 2;

        const radius = 70;
        const moonSize = 40;
        const center = 60;

        moonDiv.style.left =
            `${center + radius * Math.cos(angle) - moonSize / 2}px`;

        moonDiv.style.top =
            `${center + radius * Math.sin(angle) - moonSize / 2}px`;

        // Ajouter la lune à sa planète
        planetDiv.appendChild(moonDiv);
    });

    // 5. Ajouter la planète à la section HTML
    listPlanets.appendChild(planetDiv);
});
