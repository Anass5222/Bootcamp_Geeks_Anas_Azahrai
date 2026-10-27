
const container = document.getElementById("container");
const box = document.getElementById("animate");


let position = 0;       // how many px the box has moved to the right
let intervalId = null;  // ID of the running interval

// Called by the button: onclick="myMove()" ----------
// Each click puts the box back at the left edge and moves it to the right again.
function myMove() {
  // Stop the previous movement, if one is still running
  clearInterval(intervalId);

  // Back to the starting point
  position = 0;
  box.style.left = "0px";

  // Left edge of the box can go up to 400px (container) - 50px (box) = 350px
  const maxPosition = container.clientWidth - box.offsetWidth;

  // Move 1px to the right every millisecond
  intervalId = setInterval(() => {
    position++;
    box.style.left = position + "px";

    // Stop when the box reaches the right end
    if (position >= maxPosition) {
      clearInterval(intervalId);
    }
  }, 1);
}