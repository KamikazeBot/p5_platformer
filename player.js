function Player(x,y,h,w,c){
    this.x = x;
    this.y = y;
    this.height = h;
    this.width = w;
    this.color = c;
    this.xdir = 0;
    this.render = function(){
        push();
        fill(this.color);
        noStroke();
        rect(this.x,this.y, this.width, this.height);
        pop();
    }
    this.setDir = function(dir){
        this.xdir = dir;
    }
    this.move = function(){
        if((this.x>= 5 && this.xdir === -1) || (this.x<=width-(this.xdir*5)-this.width && this.xdir === 1)){
            this.x += this.xdir*5;
        }
    }
}