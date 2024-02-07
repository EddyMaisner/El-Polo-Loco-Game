class Startscreen  {

    constructor() {
        super().loadImage('./img/9_intro_outro_screens/start/startscreen_1.png');
        
        this.width = 720;
        this.height = 480;

        this.x = 0;
        this.y = 0;
    }

    draw() {
        super.draw();
        const firstStartScreenDiv = document.getElementById('firstStartScreen');
        firstStartScreenDiv.appendChild(this.element);
    }
}