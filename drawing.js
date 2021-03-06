let value = 0;

function setup() {
  // Canvas & color settings
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  
  background(0);
  numberOfColors = 10;
  ellipseRadius = 5;
  
  //split the screen into different parts (i parts) and assign each rectange to a certain color. Color spectrun split into i parts --> for brush color
  for (let i = 0; i < numberOfColors; i++){
    fill((360/numberOfColors)*i, 100, 100)
    rect(width*(i/numberOfColors), 0, width*((1)/numberOfColors) - 1, height*(1/8));
  }
  
  //split the screen into different parts (i parts) and assign each rectange to a certain color. Color spectrun split into i parts --> for canvas color
  for (let i = 0; i < numberOfColors; i++){
    fill((360/numberOfColors)*i, 100, 100)
    rect(width*(i/numberOfColors), height*(7/8), width*((1)/numberOfColors) - 1, height);
  }
}

function draw(){ 
  fill(colorBrushFunction(), 100, 100);
  colorBackgroundFunction();
  
  //draw an ellipse if in a certain area of the canvas (makes sure that the drawings dont happen on the same area where the brush/canvas color chooser is
  if (mouseIsPressed && mouseY < (height*(7/8)*2 + ellipseRadius)/2 && mouseY > (height*(1/8)*2 + ellipseRadius)/2){
    ellipse(mouseX, mouseY, ellipseRadius);
  }
}

//returns the color value when the person clicks on that area on the canvas color chooser --> brush color
function colorBrushFunction(){
  if (mouseIsPressed){
    for (let j = 0; j < numberOfColors; j++){
      if ((width*(j/numberOfColors))<mouseX && mouseX<(width*((j+1)/numberOfColors)) && mouseY < height*(1/8)){
        return((360/numberOfColors)*j);
      }
    }
  }
}

//returns the color value when the person clicks on that area on the canvas color chooser --> canvas color
function colorBackgroundFunction(){
  if (mouseIsPressed){
    for (let j = 0; j < numberOfColors; j++){
      if ((width*(j/numberOfColors))<mouseX && mouseX<(width*((j+1)/numberOfColors)) && mouseY > height*(7/8)){
        backgroundColor = ((360/numberOfColors)*j);
        fill(backgroundColor, 100, 100);
        rect(0, height*(1/8) + 10, width, height*(6/8) - 20);
      }
    }
  } 
}

