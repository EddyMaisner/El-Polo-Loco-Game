class GroundBottle extends movableObject {
    width = 480;
    height = 480;
    y = 55;
    


        


    constructor() {
        super().loadImage(/img/6_salsa_bottle/1_salsa_bottle_on_ground.png);
        this.x = 100;//100 + Math.random() * 1200;
        
    }
}