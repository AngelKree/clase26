class baseclass{
    constructor(x,y,width,height,angle){
        var options ={
            restitution:0.5,
            friction:1.0,
            density:1.5
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/bird.png");
        World.add(world,this.body);
    }
        display(){
            var pos=this.body.position;
            var angle= this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            fill("green");
            strokeWeight(4);
            stroke("blue");
            image(this.image,0,0,this.width,this.height);
            pop();
        }
}