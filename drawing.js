let value = 0;

function setup() {
  // Canvas & color settings
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  
  background(0);
  numberOfColors = 10;
  ellipseRadius = 5;
  for (let i = 0; i < numberOfColors; i++){
    fill((360/numberOfColors)*i, 100, 100)
    rect(width*(i/numberOfColors), 0, width*((1)/numberOfColors) - 1, height*(1/8));
  }
  
  for (let i = 0; i < numberOfColors; i++){
    fill((360/numberOfColors)*i, 100, 100)
    rect(width*(i/numberOfColors), height*(7/8), width*((1)/numberOfColors) - 1, height);
  }
}

function draw(){ 
  fill(colorBrushFunction(), 100, 100);
  colorBackgroundFunction();
  if (mouseIsPressed && mouseY < (height*(7/8)*2 + ellipseRadius)/2 && mouseY > (height*(1/8)*2 + ellipseRadius)/2){
    ellipse(mouseX, mouseY, ellipseRadius);
  }
}

function colorBrushFunction(){
  if (mouseIsPressed){
    for (let j = 0; j < numberOfColors; j++){
      if ((width*(j/numberOfColors))<mouseX && mouseX<(width*((j+1)/numberOfColors)) && mouseY < height*(1/8)){
        return((360/numberOfColors)*j);
      }
    }
  }
}

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

