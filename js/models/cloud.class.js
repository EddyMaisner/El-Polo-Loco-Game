class cloud extends movableObject {
    y = 20;
    height = 300;
    width = 450;

    constructor(){
        super().loadImage('./img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500;
        this.animate();
        
    }

    animate() {
        setInterval(() => {
            this.x -= 0.02;
        }, 0.01);
    }
}