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

//defined for player movement
let x = 100;
let y = 100;
var walls;
let wall = [];
var player1;
//screens
let canvas;
let gameState = "title";
//timer
let startTime;
let timeFrame;
let timeInt = 1000;
//**PRELOAD FONTS/IMAGES
function preload() {
  myFont = loadFont('assets/fonts/Monoton-Regular.ttf');
}

function setup() {
  //**CREATES CANVAS
  canvas = createCanvas(600, 550);
  canvas.parent("sketch-holder");
  textFont(myFont);
  frameRate(60);

  imageMode(CENTER);
  var img = loadImage('small_circle0001.png');
  player1 = createSprite(x, y);
  player1.addImage(img);

  walls = new Group();
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
    if (gameState === "title") {
    gameState = "info";
    } else if (gameState === "info" || gameState === "gameover") {
      //insert timer start here
      timeStart();
      gameState = "game";
    }
  }
   if (gameState === "game") {
    if (key === "s" || key === "S") {
      saveCanvas();
    } else if (gameState === "game") {
      if (key === "x" || key === "X") {
        gameState = "gameover";
      }
    }
  }
}

//**FUNCTION FOR TIMER DURING GAMESCREEN
function timeStart() {
  startTime = frameCount;
  timeFrame = startTime + timeInt;
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
  textSize(40);
  textAlign(CENTER);
  text("INFO ON HOW TO PLAY THE GAME", width * 0.5, height * 0.33);
  textSize(20);
  text('Press "Enter" To Start Game', width * 0.5, height * 0.46);
  text('Press "S" to save the game', width * 0.5, height * 0.56);
  text('Press "X" to end game', width * 0.5, height * 0.66);
  text('Press "Enter" To Play Again', width * 0.5, height * 0.76);
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
  wall[0] = createSprite(300, 50, 600, 20); //top
  wall[0].shapeColor = color(153, 51, 255);
  walls.add(wall[0]);

  wall[1] = createSprite(10, 280, 20, 440); //left
  wall[1].shapeColor = color(153, 51, 255);
  walls.add(wall[1]);

  wall[2] = createSprite(590, 240, 20, 400); //right
  wall[2].shapeColor = color(153, 51, 255);
  walls.add(wall[2]);

  wall[3] = createSprite(300, 490, 600, 20); //bottom
  wall[3].shapeColor = color(153, 51, 255);
  walls.add(wall[3]);

  //maze layout
  //vertical
  wall[4] = createSprite(85, 100, 30, 100); //1stLeftTopV
  wall[4].shapeColor = color(153, 51, 255);
  walls.add(wall[4]);

  wall[5] = createSprite(85, 275, 30, 150); //1stLeftMiddleV
  wall[5].shapeColor = color(153, 51, 255);
  walls.add(wall[5]);

  wall[6] = createSprite(165, 175, 30, 110); //2ndLeftTopV
  wall[6].shapeColor = color(153, 51, 255);
  walls.add(wall[6]);

  wall[7] = createSprite(165, 420, 30, 120); //1stBottomLeftV
  wall[7].shapeColor = color(153, 51, 255);
  walls.add(wall[7]);

  wall[8] = createSprite(215, 255, 30, 110); //2ndLeftMiddleV
  wall[8].shapeColor = color(153, 51, 255);
  walls.add(wall[8]);

  wall[9] = createSprite(245, 175, 30, 110); //3rdLeftTopV
  wall[9].shapeColor = color(153, 51, 255);
  walls.add(wall[9]);

  wall[10] = createSprite(245, 460, 30, 50); //2ndLeftBottomV
  wall[10].shapeColor = color(153, 51, 255);
  walls.add(wall[10]);

  wall[11] = createSprite(325, 335, 30, 110); //3rdLeftMiddleV
  wall[11].shapeColor = color(153, 51, 255);
  walls.add(wall[11]);

  wall[12] = createSprite(325, 460, 30, 50); //3rdLeftBottomV
  wall[12].shapeColor = color(153, 51, 255);
  walls.add(wall[12]);

  wall[13] = createSprite(415, 100, 30, 100); //4thLeftTopV
  wall[13].shapeColor = color(153, 51, 255);
  walls.add(wall[13]);

  wall[14] = createSprite(415, 400, 30, 80); //4thLeftBottomV
  wall[14].shapeColor = color(153, 51, 255);
  walls.add(wall[14]);

  wall[15] = createSprite(505, 160, 30, 80); //5thLeftTopV
  wall[15].shapeColor = color(153, 51, 255);
  walls.add(wall[15]);

  wall[16] = createSprite(505, 430, 30, 110); //5thLeftBottomV
  wall[16].shapeColor = color(153, 51, 255);
  walls.add(wall[16]);

  //horizontal
  wall[17] = createSprite(50, 215, 100, 30); //1stLeftMiddleH
  wall[17].shapeColor = color(153, 51, 255);
  walls.add(wall[17]);

  wall[18] = createSprite(50, 410, 100, 30); //1stBottomH
  wall[18].shapeColor = color(153, 51, 255);
  walls.add(wall[18]);

  wall[19] = createSprite(120, 135, 100, 30); //1stTopH
  wall[19].shapeColor = color(153, 51, 255);
  walls.add(wall[19]);

  wall[20] = createSprite(110, 295, 80, 30); //2ndMiddleH
  wall[20].shapeColor = color(153, 51, 255);
  walls.add(wall[20])

  wall[21] = createSprite(250, 215, 200, 30); //3rdMiddleH
  wall[21].shapeColor = color(153, 51, 255);
  walls.add(wall[21]);

  wall[22] = createSprite(290, 135, 120, 30); //2ndTopH
  wall[22].shapeColor = color(153, 51, 255);
  walls.add(wall[22]);

  wall[23] = createSprite(285, 375, 110, 30); //2ndBottomH
  wall[23].shapeColor = color(153, 51, 255);
  walls.add(wall[23]);

  wall[24] = createSprite(350, 295, 140, 30); //4thMiddleH
  wall[24].shapeColor = color(153, 51, 255);
  walls.add(wall[24]);

  wall[25] = createSprite(460, 215, 120, 30); //5thMiddleH
  wall[25].shapeColor = color(153, 51, 255);
  walls.add(wall[25]);

  wall[26] = createSprite(460, 375, 120, 30); //3rdBottomH
  wall[26].shapeColor = color(153, 51, 255);
  walls.add(wall[26]);

  wall[27] = createSprite(530, 295, 100, 30); //6thMiddleH
  wall[27].shapeColor = color(153, 51, 255);
  walls.add(wall[27]);

  //exit
  fill(255, 0, 0);
  rect(580, 440, 30, 40);

  //ghost
  fill(255);
  ellipse(45, 100, 30);

  player1.collide(walls);
  player();
  player1.debug = mouseIsPressed;

  if (frameCount > timeFrame) {
  gameState = 'gameover';
}

  drawSprites();

}

//**PLAYER MOVEMENT
function player() {
  player1.velocity.x = 0;
  player1.velocity.y = 0;

  if (keyIsDown(LEFT_ARROW)) {
    x -= 4;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 4;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 4;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 4;
  }
}

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
