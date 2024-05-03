function setup() {
  createCanvas(600, 400);
  background("rgb(143,15,15)");
}

function draw() {
  stroke("rgb(156,24,47)(64,235,83)");
  fill("rgb(46,10,62)");
  
if(mouseIsPressed){
 rect(mouseX, mouseY, 40,40);
}
}