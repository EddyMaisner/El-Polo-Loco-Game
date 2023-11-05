class movableObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;    // img gespiegeld
    speedY = 0;
    acceleration = 2.5; // beschleunigung


    applyGravity() {
        setInterval(() => {
            if (this.isAboverGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25); // geschwindigkeit der grafitation
    }

    isAboverGround() {
        return this.y < 130;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    /**
     *  @param {Array} arr - ['img/image1.png', 'img/image2.png', 'img/image3.png', ....]
     */

    loadImages(arr) {
        arr.forEach((path) => {


            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimation(images) {
        // Walk animation     
        let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 7 % 6 => 1 , Rest5     % Modulu = der Mathematische rest 
        // i = 0,1,2,3,4,5, = 0,1,2,3,4,5, = 0,1,2,3,4,5,
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;


    }

    moveLeft() {
        this.x -= this.speed;



    }

    jump() {
        this.speedY = 30;
    }
}