let gameContainer = document.querySelectorAll(".box");
let gameBox = document.querySelector(".box");
let colorBox = gameBox.style.background;
console.log(colorBox == "red");
console.log(gameBox.dataset);
// gameContainer.forEach(gameContainer => {
//   gameContainer.addEventListener("click", () => {
//     takeTurn();
//     // if (colorBox !== "red" || colorBox !== "blue") {
//     //   console.log("no color inside");
//     // }
//   });
// });

// while (colorBox !== "red" || colorBox !== "blue") {
//   console.log("no color inside");
// }

// function takeTurn() {
let gameCounter = 0;
player1 = gameCounter % 2 == 0;
player2 = gameCounter % 2 == 1;
console.log(player1);
console.log(player2);

gameContainer.forEach(gameContainer => {
  let setColor = gameContainer.style.background;
  console.log(setColor);
  gameContainer.addEventListener("click", () => {
    if (player1) {
      if (gameCounter % 2 == 0 && setColor == "" && setColor !== "blue") {
        gameContainer.style.background = "red";
        gameCounter++;
        console.log(gameCounter);
      } else if (gameCounter % 2 == 1) {
        gameContainer.style.background = "blue";
        gameCounter++;
        console.log(gameCounter);
      }
    } else if (player2) {
      if (gameCounter % 2 == 0) {
        gameContainer.style.background = "red";
        gameCounter++;
        console.log(gameCounter);
      } else if (gameCounter % 2 == 1 && setColor == "" && setColor !== "red") {
        gameContainer.style.background = "blue";
        gameCounter++;
        console.log(gameCounter);
      }
    }
  });
});
