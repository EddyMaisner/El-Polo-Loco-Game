class World {

    character = new Character();
    level = level1;

    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    throwableObjects = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    };

    run() {
        setInterval(() => {
            this.checkCollision();
            this.checkThrowObjects();
        }, 200)
    }

    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0); 
        // -------- Spacy for fixed objects ----------//
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0); 

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);


        // Draw wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);                  // mo = movableobjects == function draw(ctx) = draw(context){...}
        mo.drawFrame(this.ctx);             // mo = movableobjects == function drawFrame(ctx) = drawFrame(context){...}

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();                    // hier speichern wir das bild im canvas 
        this.ctx.translate(mo.width, 0);    // hier ändern wir das bild und spiegeln es 
        this.ctx.scale(-1, 1);              // das bild wird zurück auf die anfangs ungespiegelte position des bildes positioniert , weil es beim spiegeln um sich selbst dreht und um 1 bzw um sich selbst versetzt wird. 
        mo.x = mo.x * -1;                   // hier wirds nochmal mit der x koordinate um 1 zurück zum platz positioniert 
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;                   // hier dreht man die x koordinate umdrehen
        this.ctx.restore();
    }
}