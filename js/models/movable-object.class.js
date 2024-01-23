class movableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;    // img gespiegeld
    speedY = 0;
    acceleration = 2.5; // beschleunigung
    energy = 100;
    lastHit = 0;


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


    isColliding(mo) {                                //  `isColliding(mo) {`: Diese Zeile definiert die Methode `isColliding`, die ein Argument `mo` erwartet. Dieses Argument sollte das andere Objekt darstellen, mit dem die Kollision überprüft werden soll.
        return this.x + this.width > mo.x &&         // 2. `return this.x + this.width > mo.x &&`: Hier wird überprüft, ob die rechte Seite des Objekts, auf dem die Methode aufgerufen wird (repräsentiert durch `this.x + this.width`), weiter rechts liegt als die linke Seite des anderen Objekts (`mo.x`).
            this.y + this.height > mo.y &&           // 3. `this.y + this.height > mo.y &&`: In dieser Zeile wird überprüft, ob die untere Seite des Objekts, auf dem die Methode aufgerufen wird (repräsentiert durch `this.y + this.height`), weiter unten liegt als die obere Seite des anderen Objekts (`mo.y`).
            this.x < mo.x &&                        // 4. `this.y < mo.x &&`: Hier wird überprüft, ob die obere Seite des Objekts, auf dem die Methode aufgerufen wird (repräsentiert durch `this.y`), weiter oben liegt als die linke Seite des anderen Objekts (`mo.x`)
            this.y < mo.y + mo.height;              // 5. `this.y < mo.y + mo.height`: Schließlich wird überprüft, ob die obere Seite des Objekts, auf dem die Methode aufgerufen wird (repräsentiert durch `this.y`), weiter oben liegt als die untere Seite des anderen Objekts (`mo.y + mo.height`).
    }

    hit() {
        this.energy -= 5;      // hier wird der schaden je collision 5 vom hp abgezogen
        if (this.energy < 0) { // hier wird gesagt das es nicht weiter als 0 gehen soll 
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime(); // so speichert man zeit in zahlenformen 
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000; // difference in seconds 
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }
        

    playAnimation(images) {   
        let i = this.currentImage % images.length; 
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




