function Player(x,y,h,w,c){
    this.x = x;
    this.y = y;
    this.height = h;
    this.width = w;
    this.color = c;
    this.xdir = 0;
    this.ydir = 0;
    this.jumping = false;
    this.render = function(){
        push();
        fill(this.color);
        noStroke();
        rect(this.x,this.y, this.width, this.height);
        pop();
    }
    this.setXDir = function(dir){
        this.xdir = dir;
    }
    this.jump = function(){
        if(this.jumping === false){
            this.ydir = -15;
            this.jumping = true;
        }
    }
    this.move = function(){
        if((this.x>= 5 && this.xdir === -1) || (this.x<=width-(this.xdir*5)-this.width && this.xdir === 1)){
            this.x += this.xdir*15;
        }
        this.y += this.ydir;
        if(this.y < height-75){
            this.ydir += 1;
        }else{
            this.ydir = 0;
            this.jumping = false;
        }
        console.log(this.ydir);
    }
}