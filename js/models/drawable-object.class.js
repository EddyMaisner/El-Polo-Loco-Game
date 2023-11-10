class DrawableObject {
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;



    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image') <img id = "image" />
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height); // verschoben nach world.js zur draw function 
    }

    /**
         * 
         *  @param {Array} arr - ['img/image1.png', 'img/image2.png', 'img/image3.png', ....]
         */

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            img.style = 'transform: scaleX(-1)';
            this.imageCache[path] = img;
        });
    }

}