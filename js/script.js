window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    // Call the restartGame function when the button is clicked
    restartGame();
  });

  function startGame() {
    game = new Game();
    game.start();
  }

  function restartGame() {
    location.reload();
  }

  function movePlayer(event) {
    console.log(event);
    switch (event.key) {
      case "ArrowLeft":
        console.log("left");
        game.player.directionX = -1;
        break;
      case "ArrowUp":
        game.player.directionY = -1;
        break;
      case "ArrowRight":
        game.player.directionX = 1;
        break;
      case "ArrowDown":
        game.player.directionY = 1;
        break;
      case "a":
        game.player.top = 10;
        game.player.left = 10;
        game.player.directionX = 0;
        game.player.directionY = 0;
        break;
    }
  }

  window.addEventListener("keydown", movePlayer);

  function stopPlayer() {
    game.player.directionX = 0;
    game.player.directionY = 0;
  }

  window.addEventListener("keyup", stopPlayer);
};