//** HTML FILE ~~
    // title of the game
    // button for artist statement - probably a diff. html file
    // has info on how to play the game at bottom of screen
//** TITLE SCREEN ~~
  // button press to start game
//** PLAY GAME SCREEN -~
  // timer when the game starts
  // maze layout - collision codes so player can't pass through walls
  // ghost that follows player through the maze (if caught - game over)
  // collect coins for speed??
//** GAME OVER SCREEN ~~
  // key press/button to restart
  // final time
  // win/lose screens??

let canvas;
let gameState = "title";

//**PRELOAD FONTS/IMAGES
function preload() {
  myFont = loadFont('assets/fonts/Monoton-Regular.ttf');
}

function setup() {
  //**CREATES CANVAS
  canvas = createCanvas(600, 550);
  canvas.parent("sketch-holder");
  textFont(myFont);
}

function draw() {
  //**SWITCH BTWN SCREENS 'DEFINED'
  switch (gameState) {
    case "title":
      titleScreen();
      break;
    case "info":
      infoScreen();
      break;
    case "game":
      gameScreen();
      player();
      break;
    case "gameover":
      gameOver();
      break;
  }
}

//**KEY PRESSED FUNCTIONS
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

//**FUNCTION FOR RENDERING THE TITLE SCREEN
function titleScreen() {
  background(25, 0, 51);
  stroke(229, 204, 255);
  fill(229, 204, 255);
  textAlign(CENTER);
  //textSize(40);
  //text("GHOSTLY ESCAPE MAZE", width * 0.5, height * 0.33);
  noStroke();
  textSize(20);
  text('Press "Enter" To Start Game', width * 0.5, height * 0.5);
}

//**FUNCTION FOR INFO SCREEN
function infoScreen() {
  background(25, 0, 51);
  stroke(229, 204, 255);
  fill(229, 204, 255);
  textAlign(CENTER);
  //textSize(40);
  //textAlign(CENTER);
  //text("GHOSTLY ESCAPE MAZE", width * 0.5, height * 0.33);
  textSize(20);
  text('Press "Enter" To Start Game', width * 0.5, height * 0.66);
}

//**FUNCTION FOR RENDERING THE MAIN GAME PLAY SCREEN
function gameScreen() {
  //text
  background(25, 0, 51);
  stroke(229, 204, 255);
  fill(229, 204, 255);
  textAlign(CENTER);
  textSize(20);
  text("Escape the ghost!", width * 0.5, height * 0.07);
  //noStroke();
  //textSize(15);
  //text('Press "S" to save the game.', width * 0.5, height * 0.95);
  //textSize(15);
  //text('Press "X" to end game.', width * 0.5, height * 0.9);

  //border wall
  fill(153, 51, 255)
  noStroke();
  rect(0, 50, 20, 450); //left
  rect(0, 50, 600, 20); //top
  rect(580, 50, 20, 440); //right
  rect(0, 480, 600, 20); //bottom

  //maze layout
    //vertical
  rect(70, 50, 30, 80); //v
  rect(70, 200, 30, 150); //v
  rect(150, 120, 30, 100); //v
  rect(150, 360, 30, 120); //v
  rect(200, 220, 30, 90); //v -middle
  rect(230, 120, 30, 110); //v
  rect(230, 440, 30, 40); //v
  rect(310, 300, 30, 60); //v
  rect(310, 440, 30, 50); //v
  rect(400, 50, 30, 100); //v
  rect(400, 360, 30, 80); //v
  rect(490, 120, 30, 80); //v
  rect(490, 370, 30, 110); //v
    //horizontal
  rect(0, 200, 100, 30); //h
  rect(0, 395, 100, 30); //h
  rect(70, 120, 100, 30); //h
  rect(70, 280, 80, 30); //h
  rect(150, 200, 200, 30); //h
  rect(230, 120, 120, 30); //h
  rect(230, 360, 110, 30); //h
  rect(280, 280, 140, 30); //h --
  rect(400, 200, 120, 30); //h
  rect(400, 360, 120, 30); //h
  rect(480, 280, 100, 30); //h

     //exit
   fill(255, 0, 0);
   rect(580, 450, 30, 30);

     //ghost
   fill(255);
   ellipse(45, 100, 30);
}

//**PLAYER MOVEMENT
function player() {
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  fill(0);
  ellipse(x, y, 40, 40);
}

//**TIMER/ SCORE
//**FUNCTION FOR RENDERING GAME OVER SCREEN
function gameOver() {
  //background(255, 204, 204);
  background(102, 0, 0);
  stroke(255, 204, 204);
  fill(255, 204, 204);
  textAlign(CENTER);
  textSize(60);
  text("GAME OVER", width * 0.5, height * 0.33);
  noStroke();
  textSize(20);
  text('Press "Enter" To Play Again', width * 0.5, height * 0.66);
}
