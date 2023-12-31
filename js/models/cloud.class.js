class cloud extends movableObject {
    y = 5;
    height = 250;
    width = 400;
    

    constructor(){
        super().loadImage('./img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 1200;
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