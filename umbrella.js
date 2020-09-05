class Umbrella{
    constructor(){
        var options = {
            isStatic: true,
            restituion: 0.8
        }
        var radius = 25;
        this.body = Matter.Bodies.circle(150,459,radius,options);
        this.width = radius;
        this.height = radius;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        image(woman_image, pos.x, pos.y);
    }
}