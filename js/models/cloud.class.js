class cloud extends movableObject {
    y = 5;
    height = 250;
    width = 400;
    

    constructor(){
        super().loadImage('./img/5_background/layers/4_clouds/1.png', './img/5_background/layers/4_clouds/1.png');
        

        this.x = 100 + Math.random() * 3310;
        this.speed = 0.02 + Math.random() * 0.2;
        this.animate();
        
    }

    animate() {
        this.moveLeft();
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);

    }
}