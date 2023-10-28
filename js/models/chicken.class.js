class Chicken extends movableObject{
    
    width = 100;
    height = 80;
    y = 345;
    

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'
    ];

    constructor(){
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.35;

        this.animate(); 
    }

    animate(){
        this.moveLeft();

        setInterval(() => {
        let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 7 % 6 => 1 , Rest5     % Modulu = der Mathematische rest 
        // i = 0,1,2,3,4,5, = 0,1,2,3,4,5, = 0,1,2,3,4,5,
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        }, 100);
    }
    
}