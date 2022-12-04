class Ground{
    constructor(x,y,width,height){
        var ground_options = {
            isStatic  : true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,ground_options);
        World.add(world,this.body);
    }

    display(){
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    strokeWeight(3);
    fill("white");
    pop();


    }
}