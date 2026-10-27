

const colorSelect = document.getElementById("colorSelect");
const removeButton = document.querySelector('input[type="button"]'); // the only button

// 1. Remove the selected color from the dropdown list 
function removecolor() {
  // Nothing to remove if no option is selected (empty list)
  if (colorSelect.selectedIndex === -1) return;

  colorSelect.remove(colorSelect.selectedIndex);
}

//  2. Click on the button calls removecolor() 
removeButton.addEventListener("click", removecolor);