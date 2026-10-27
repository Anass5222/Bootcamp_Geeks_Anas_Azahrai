
const genres = [
  { value: "rock", text: "Rock", selected: false },
  { value: "blues", text: "Blues", selected: true }, // selected in the HTML
];


function getSelectedOption() {
  return genres.find((option) => option.selected);
}

// 1. Display the value of the selected option
console.log(getSelectedOption().value); 

// 2. Add <option value="classic">Classic</option>
const classic = { value: "classic", text: "Classic", selected: false };
genres.push(classic);

// 3. The new option is selected (only one option can be selected at a time)
genres.forEach((option) => (option.selected = false));
classic.selected = true;

console.log(getSelectedOption().value); // "classic"