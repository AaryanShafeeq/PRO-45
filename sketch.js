const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let rocket, rocketImg;
let meteorImg, starImg;
let meteor, star;
let bg, bgImg;

let meteorGroup, starGroup;

function preload() {
  rocketImg = loadImage("assets/rocket.png");
  meteorImg = loadImage("assets/meteor.png");
  starImg = loadImage("assets/star.png");
  bgImg = loadImage("assets/background.png");
}

function setup() {
  createCanvas(700, 800);
  engine = Engine.create();
  world = engine.world;

  meteorGroup = createGroup();

  bg = createSprite(width / 2, height / 2, 700, 800);
  bg.addImage("background", bgImg);
  bg.scale = 6.0;

  rocket = createSprite(width / 2, 660, 50, 50);
  rocket.addAnimation("rocket", rocketImg);
  rocket.scale = 0.2
}


function draw() {
  background(255);
  Engine.update(engine);

  bg.velocityY = 6;
  if (bg.y > height) {
    bg.y = height / 2;
  }

  if (keyDown("right_arrow")) {
    rocket.x += 5;
  }

  if (keyDown("left_arrow")) {
    rocket.x += -5;
  }

  if(frameCount % 60 === 0) {
    createMeteors();
  }

  drawSprites();
}

function createMeteors() {
  let meteor = createSprite(Math.round(random(0, 650)), 50, 50, 50);
  meteor.addAnimation("meteor", meteorImg);
  meteor.scale = 0.2;
  meteor.velocityY = 5;
  meteor.lifetime = 230;
  meteorGroup.add(meteor)
}
