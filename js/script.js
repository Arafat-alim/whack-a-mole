console.log("Whack a Mole");
// selecting everything
let score = document.querySelector(".score span");
let holes = document.querySelectorAll(".hole");
let plyBtn = document.querySelector(".play");
let stopBtn = document.querySelector(".stop");
let cursor = document.querySelector(".cursor img");

//! Cursor creating
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
// !_____________________________

//! play Button Function
plyBtn.addEventListener("click", () => {
  //   alert("Lets Crack it");
  plyBtn.style.display = "none";
  stopBtn.style.display = "inline-block";
  //   start our game
  let hole;
  let points = 0;

  const startGame = setInterval(() => {
    const arryNum = Math.floor(Math.random() * 9);
    hole = holes[arryNum];

    // !create an image and class attribute
    let image = document.createElement("img");
    image.setAttribute("src", "./images/mole.png");
    image.setAttribute("class", "mole");
    hole.appendChild(image);

    // removing repeated moles
    setTimeout(() => {
      hole.removeChild(image);
    }, 600);
  }, 700);

  //! Hit the mole and get the point
  window.addEventListener("click", (e) => {
    console.log(e.target);
    // if hit
    if (e.target === hole) {
      score.innerText = ++points;
    }
  });

  //! stop button Function
  stopBtn.addEventListener("click", () => {
    clearInterval(startGame);
    plyBtn.style.display = "inline-block";
    stopBtn.style.display = "none";
    // score will be reset
    score.innerText = 0;
  });
});
