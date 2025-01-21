class Character extends MovableObject {
    y = 160;
    height = 300;
    width = 200;
    speed = 2;

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];
    world;


    constructor() {
        super();  // Erst den Eltern-Konstruktor aufrufen
        this.loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }


    animate() { 

        setInterval(() => {
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
            }

            if(this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);


        setInterval( () => {

            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) { // sorgt dafür, dass er in beide Richtungen läuft.
                

                //Walk animation
                let i = this.currentImage % this.IMAGES_WALKING.length; // Zeile sorgt dafür, dass das Array wieder bei 0 beginnt.
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }            
        }, 100);
    }

    jump() {

    }
}