class World {

    character = new Character();
    level = level1;

    canvas;
    ctx;
    keyboard;
    camera_x = 0;


    constructor(canvas,keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    };

    draw() {


        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);

        this.ctx.translate(-this.camera_x, 0);
        

        // Draw wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o =>{
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        
            if (mo.otherDirection) {
                this.ctx.save();                    // hier speichern wir das bild im canvas 
                this.ctx.translate(mo.width, 0);    // hier ändern wir das bild und spiegeln es 
                this.ctx.scale(-1, 1);              // das bild wird zurück auf die anfangs ungespiegelte position des bildes positioniert , weil es beim spiegeln um sich selbst dreht und um 1 bzw um sich selbst versetzt wird. 
                mo.x = mo.x * -1;                   // hier wirds nochmal mit der x koordinate um 1 zurück zum platz positioniert 
            }
            this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
            if (mo.otherDirection) {
                mo.x = mo.x * -1; // hier dreht man die x koordinate umdrehen
                this.ctx.restore();
            }
}}