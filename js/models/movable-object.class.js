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

    playAnimation(images){
         // Walk animation     
         let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 7 % 6 => 1 , Rest5     % Modulu = der Mathematische rest 
         // i = 0,1,2,3,4,5, = 0,1,2,3,4,5, = 0,1,2,3,4,5,
         let path = images[i];
         this.img = this.imageCache[path];
         this.currentImage++;
    }

    moveRight() {
        console.log("moveRight");
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);

    }
}