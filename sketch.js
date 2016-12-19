var platforms = [];
var player;
function setup(){
    createCanvas(1280, 720);
    platforms.push(new Platform(0, height-50, width, 50, 'rgb(0,255,0)'));
    player = new Player(25,height - 75, 25, 25, 'rgb(255,255,255)');
}

function draw() {
    background(51);
    
    for(var i=0; i<platforms.length; i++){
        platforms[i].render();
    }
    player.render();
    player.move();
}