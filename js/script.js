console.log("Whack a Mole");
// selecting everything
let score = document.querySelector(".score span");
let holes = document.querySelectorAll(".hole");
let plyBtn = document.querySelector(".play");
let stopBtn = document.querySelector(".stop");
let cursor = document.querySelector(".cursor img");

// Cursor creating
// pageX - position of x from the left of the window
// pageY - position of y from the top of the window

window.addEventListener("mousemove", (e) => {
  //   console.log(e.target);
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";

  window.addEventListener("click", () => {
    cursor.style.animation = "hit 0.1s ease-in";
    // remove the animation after the animated
    setTimeout(() => {
      cursor.style.removeProperty("animation");
    }, 100);
  });
});

// play Button Function
plyBtn.addEventListener("click", () => {
  //   alert("Lets Crack it");
});

// stop button Function
stopBtn.addEventListener("Click", () => {
  alert("Stop the Game");
});
