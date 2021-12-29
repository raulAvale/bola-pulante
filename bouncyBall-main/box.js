class box{
constructor(x,y,width,Height){
    var opt ={
        restitution: 2,
        friction: 2,
        density: 1,
    }
    this.body = Bodies.rectangle(x,y,width,Height,opt);
    World.add(world,this.body);
    this.width = width;
    this.Height = Height;
}
display(){
    var pos = this.body.position;
    fill("BLUE")
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.Height);
}
}