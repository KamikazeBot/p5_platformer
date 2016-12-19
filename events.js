function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    player.setXDir(1);
  } else if (keyCode === LEFT_ARROW) {
    player.setXDir(-1);
  } else if (keyCode === UP_ARROW){
    player.jump();
  }
}

function keyReleased() {
    if ((keyCode === RIGHT_ARROW && player.xdir === 1 )|| (keyCode === LEFT_ARROW && player.xdir === -1)) {
    player.setXDir(0);
    }
}