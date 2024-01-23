class StatusBar extends DrawableObject {

    IMAGES = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',     // bild 0
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png'   // bild 5
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 5;
        this.y = 0;
        this.width = 200;
        this.height = 70;
        this.setPercentage(100);
        
    }

    // sePercentage(50);
    setPercentage(percentage) {
        this.percentage = percentage;   // => 0 .... 5
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {                // wenn percentage gleich 100 ist ...
            return 5;                                // soll das 5 bild angezeigt werden ...
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {          // wenn percentage gleich 40 ist ...
            return 2;                               // soll das 2 bild angezeigt werden ...
        } else if (this.percentage > 20) {
            return 1;
        } else if (this.percentage > 0) {           // wenn percentage gleich 0 ist ...
            return 0;                               // soll das 0 bild angezeigt werden
        }

    }
}
