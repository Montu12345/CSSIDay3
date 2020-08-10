let x = 20;
let y = 20;
function setup() {
  createCanvas(100, 100);
  strokeWeight(4);
}

function draw() {
  background(204);
  //Keyboard Data: Modify the 2nd interactive code section 
  //to move the line using the keys W (up), A (left), S (down), and D (right). 

  if ((keyIsPressed == true) && (key == 'W')) { // If the key is pressed,
    y--;                      // add 1 to x.
  }
  if ((keyIsPressed == true) && (key == 'A')) { // If the key is pressed,
    x--;                      // add 1 to x.
  }
  if ((keyIsPressed == true) && (key == 'S')) { // If the key is pressed,
    y++;                      // add 1 to x.
  }
  if ((keyIsPressed == true) && (key == 'D')) { // If the key is pressed,
    x++;                      // add 1 to x.
  }
  line(x, y, x-60, y-60);
  
}
