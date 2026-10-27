const form = document.getElementById("MyForm");
const radiusInput = document.getElementById("radius");
const volumeInput = document.getElementById("volume");


// Volume of a sphere: V = 4/3 × π × r³
function sphereVolume(radius) {
  return (4 / 3) * Math.PI * radius ** 3;
}

// Submit
form.addEventListener("submit", (event) => {
  // Must come first: stops the page from reloading
  event.preventDefault();

  // Read the radius. Accept "3,5" as well as "3.5", and ignore spaces
  const text = radiusInput.value.trim().replace(",", ".");
  const radius = Number(text);

  // The radius must be a positive number
  if (text === "" || !Number.isFinite(radius) || radius <= 0) {
    alert("Please enter a positive number for the radius.");
    volumeInput.value = "";
    return;
  }

  // Show the volume with 2 decimals
  volumeInput.value = sphereVolume(radius).toFixed(2);
});