class Character extends movableObject {

    height = 280;
    y = 30;
    speed = 10;

    IMAGES_WALKING = [
        './img/2_character_pepe/2_walk/W-21.png',
        './img/2_character_pepe/2_walk/W-22.png',
        './img/2_character_pepe/2_walk/W-23.png',
        './img/2_character_pepe/2_walk/W-24.png',
        './img/2_character_pepe/2_walk/W-25.png',
        './img/2_character_pepe/2_walk/W-26.png'

    ];

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png'
    ];

    world;
    charakter_running_sound = new Audio('audio/character_running.mp3');

    constructor() {
        super().loadImage('./img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.applyGravity();
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.charakter_running_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;    // rechter tastendruck img nicht gespiegelt
                this.charakter_running_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;     // linker tastendruck img  gespiegelt
                this.charakter_running_sound.play();
            }


            if (this.world.keyboard.SPACE && !this.isAboverGround()){
                this.jump();
            }

            this.world.camera_x = -this.x + 100;

        }, 1000 / 60);



        setInterval(() => {  

            if (this.isAboverGround()) {
                    // Jump animation
                this.playAnimation(this.IMAGES_JUMPING);
            } else { // wenn nicht dann die walk animation

                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    // Walk animation
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 50);

    }

    jump() {
        this.speedY = 30;
    }
}