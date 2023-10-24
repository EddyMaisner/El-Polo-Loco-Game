class cloud extends movableObject {
    y = 20;
    height = 200;

    constructor(){
        super().loadImage('./img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500;
        this.width = 600;
        
    }
}