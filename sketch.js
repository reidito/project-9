var btn_red;
var btn_green;

var r = 250;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  btn_red = createButton("RED");
  btn_red.position(100,20);
  btn_red.mousePressed(red_bg);
  btn_green=createButton("GREEN");
  btn_green.position(100,50);
  btn_green.mousePressed(green_bg);
}
function red_bg(){
  r=255;
  g=0;
  b=0;
}
function green_bg(){
  r=0;
  g=255;
  b=0;
}
function draw() {
  background(r,g,b);
}

