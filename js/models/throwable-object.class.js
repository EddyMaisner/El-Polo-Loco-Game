class ThrowableObject extends movableObject {


    constructor(x, y) {
        super().loadImage('/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 50;
        this.trow();
        
    }

    trow() {
        this.speedY = 30;
        this.applyGravity();
        setInterval( () => {
            this.x += 10;
        }, 25);
    }
}