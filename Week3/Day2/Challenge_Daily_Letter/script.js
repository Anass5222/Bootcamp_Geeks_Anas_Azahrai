
const input = document.getElementById("letters");


const notLetter = /[^\p{L}]/gu;

// The input event runs after every change: typing, pasting, autocomplete...
input.addEventListener("input", () => {
  const before = input.value;
  const cleaned = before.replace(notLetter, "");

  // Only letters: nothing to change
  if (cleaned === before) return;

  
  const caret = input.selectionStart;
  const removedBeforeCaret = (before.slice(0, caret).match(notLetter) || []).length;

  input.value = cleaned;
  input.setSelectionRange(caret - removedBeforeCaret, caret - removedBeforeCaret);
});