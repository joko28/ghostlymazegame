//HTML FILE ~~
    // title of the game
    // button for artist statement - probably a diff. html file
    // has info on how to play the game at bottom of screen
// TITLE SCREEN ~~
    // button press to start game
//PLAY GAME SCREEN -~
    // timer when the game starts
    // maze layout - collision codes so player can't pass through walls
    // ghost that follows player through the maze (if caught - game over)
    // collect coins for speed??
//GAME OVER SCREEN ~~
    // key press/button to restart
    // final time
    // win/lose screens??

let canvas;
let gameState = "title";

  //PRELOAD FONTS/IMAGES
function preload() {
  //myFont = loadFont('assets/Monoton-Regular.ttf');
}

function setup() {
  //CREATES CANVAS
  canvas = createCanvas(600, 500);
  canvas.parent("sketch-holder");
  //textFont(myFont);
}

function draw() {
  //SWITCH BTWN SCREENS 'DEFINED'
  switch (gameState) {
    case "title":
      titleScreen();
      break;
    case "info":
      infoScreen();
      break;
    case "game":
      gameScreen();
      break;
    case "gameover":
      gameOver();
      break;
  }
}

//KEY PRESSED FUNCTIONS
function keyPressed() {
  if (keyCode === ENTER) {
    if (gameState === "title" || gameState === "gameover") {
      gameState = "game";
    }
  } else if (gameState === "game") {
    if (key === "s" || key === "S") {
      saveCanvas();
    } else if (gameState === "game") {
      if (key === "x" || key === "X") {
        gameState = "gameover";
      }
    }
  }
}


//FUNCTION FOR RENDERING THE TITLE SCREEN
function titleScreen() {
  background(229, 204, 255);
  stroke(25, 0, 51);
  fill(25, 0, 51);
  textSize(40);
  textAlign(CENTER);
  text("GHOSTLY ESCAPE MAZE", width * 0.5, height * 0.33);
  //noStroke();
  textSize(20);
  text('Press "Enter" To Start Game', width * 0.5, height * 0.66);
}

//FUNCTION FOR INFO SCREEN
function infoScreen() {
  background(229, 204, 255);
  stroke(25, 0, 51);
  fill(25, 0, 51);
  textSize(40);
  textAlign(CENTER);
  text("GHOSTLY ESCAPE MAZE", width * 0.5, height * 0.33);
  textSize(20);
  text('Press "Enter" To Start Game', width * 0.5, height * 0.66);
}

//FUNCTION FOR RENDERING THE MAIN GAME PLAY SCREEN
function gameScreen() {
  background(229, 204, 255);
  stroke(25, 0, 51);
  fill(25, 0, 51);
  textSize(30);
  textAlign(CENTER);
  text("Escape the ghost!", width * 0.5, height * 0.1);
  noStroke();
  textSize(15);
  text('Press "S" to save the game.', width * 0.5, height * 0.95);
  textSize(15);
  text('Press "X" to end game.', width * 0.5, height * 0.9);
}

//FUNCTION FOR RENDERING GAME OVER SCREEN
function gameOver() {
  background(255, 204, 204);
  stroke(102, 0, 0);
  fill(102, 0, 0);
  textSize(60);
  textAlign(CENTER);
  text("GAME OVER", width * 0.5, height * 0.33);
  textSize(20);
  text('Press "Enter" To Play Again', width * 0.5, height * 0.66);
}
