const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

// 1. Convert the JSON string to a JS object
function toJs() {
  return new Promise((resolve, reject) => {
    const morseJS = JSON.parse(morse);

    if (Object.keys(morseJS).length === 0) {
      reject("Error: the morse object is empty.");
    } else {
      resolve(morseJS);
    }
  });
}

// 2. Ask the user for a word/sentence and translate it
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const input = prompt("Enter a word or a sentence:");

    if (input === null || input.trim() === "") {
      reject("Error: you must enter a word or a sentence.");
      return;
    }

    const translation = [];

    for (const char of input.toLowerCase()) {
      // Spaces are not in the morse object, so we skip them
      // to allow sentences ("hello world")
      if (char === " ") continue;

      if (!(char in morseJS)) {
        reject(`Error: the character "${char}" doesn't exist in the morse object.`);
        return;
      }

      translation.push(morseJS[char]);
    }

    resolve(translation);
  });
}

// 3. Join with line breaks and display on the page
function joinWords(morseTranslation) {
  const output = document.getElementById("output");
  output.innerHTML = morseTranslation.join("<br>");
}

// 4. Chain the three functions
toJs()
  .then((morseJS) => toMorse(morseJS))
  .then((morseTranslation) => joinWords(morseTranslation))
  .catch((error) => {
    document.getElementById("output").textContent = error;
    console.log(error);
  });