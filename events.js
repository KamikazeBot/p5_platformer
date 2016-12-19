function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    player.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    player.setDir(-1);
  }
}

function keyReleased() {
    if ((keyCode === RIGHT_ARROW && player.xdir === 1 )|| (keyCode === LEFT_ARROW && player.xdir === -1)) {
    player.setDir(0);
    }
}