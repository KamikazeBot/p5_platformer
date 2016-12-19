function Platform(x,y,w,h,c){
    this.width = w;
    this.height = h;
    this.color = c;
    this.render = function(){
        push();
        fill(this.color);
        noStroke();
        rect(x,y, this.width, this.height);
        pop();
    }
}