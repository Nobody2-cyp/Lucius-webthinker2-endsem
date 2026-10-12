
let birdImg;
let backgroundImg;
let bird;
function preload() {
        // write code to preload bird.png and background.png
    // refer to assets folder
    birdImg = loadImage('assets/bird.png');
    backgroundImg = loadImage('assets/background.png');
}
function setup() {
    new Canvas(400, 600);
 // write code to create sprite and load bird image on sprite

    bird = new Sprite();

    bird.x = width / 2;
    bird.y = height / 2;
    
    bird.width = 30;
    bird.height = 30;

    bird.img = birdImg;

}

function draw() {
      image(backgroundImg, 0, 0, width, height); 
    }
   

