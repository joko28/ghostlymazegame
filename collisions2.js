//Collisions
//Collision between groups
//function called upon collision

var obstacles;
var collectibles;
var monster;

function setup() {
  //createCanvas(1000, 600);
  createCanvas(windowWidth, windowHeight);

  //create a user controlled sprite
  monster = createSprite(400, 200);
  monster.addAnimation('normal', 'assets/monster.png');

  //asterisk.addAnimation('stretch', 'assets/monster.png');

  //create 2 groups
  obstacles = new Group();
  collectibles = new Group();

  for(var i=0; i<15; i++)
  {
    var box = createSprite(random(0, width), random(6, height));
    box.addAnimation('normal', 'assets/bubbly0001.png', 'assets/bubbly0004.png');
    obstacles.add(box);
  }

  for(var j=0; j<50; j++)
  {
    var dot = createSprite(random(0, width), random(0, height));
    dot.addAnimation('normal', 'assets/small_circle0001.png', 'assets/small_circle0001.png');
    collectibles.add(dot);
  }

}



function draw() {
  background(229, 204, 255);

  //if no arrow input set velocity to 0
  monster.velocity.x = (mouseX-monster.position.x)/10;
  monster.velocity.y = (mouseY-monster.position.y)/10;

  //asterisk collides against all the sprites in the group obstacles
  monster.collide(obstacles);

  //I can define a function to be called upon collision, overlap, displace or bounce
  //see collect() below
  monster.overlap(collectibles, collect);

  //if the animation is "stretch" and it reached its last frame
  if(monster.getAnimationLabel() == 'stretch' && monster.animation.getFrame() == monster.animation.getLastFrame())
  {
    monster.changeAnimation('normal');
  }

  drawSprites();

}

//the first parameter will be the sprite (individual or from a group)
//calling the function
//the second parameter will be the sprite (individual or from a group)
//against which the overlap, collide, bounce, or displace is checked
function collect(collector, collected)
{
  //collector is another name for asterisk
  //show the animation
  collector.changeAnimation('stretch');
  collector.animation.rewind();
  //collected is the sprite in the group collectibles that triggered
  //the event
  collected.remove();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
