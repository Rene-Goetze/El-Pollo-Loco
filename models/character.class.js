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
    walking_sound = new Audio('audio/walk.mp3');
    bee_sound = new Audio('audio/bee.mp3');
    thunder_sound = new Audio('audio/thunder.mp3');


    constructor() {
        super();  // Erst den Eltern-Konstruktor aufrufen
        this.loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }


    animate() { 

        let lastBeeSoundTime = 0; // Zeitpunkt des letzten bee_sound

        setInterval(() => {
            this.walking_sound.pause();
            this.walking_sound.volume = 1;
            this.thunder_sound.volume = 0.6;
        
            let currentTime = Date.now(); // Aktuelle Zeit in Millisekunden
        
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
        
                // Prüfen, ob 10 Sekunden vergangen sind (10000 ms)
                if (currentTime - lastBeeSoundTime >= 8000) {
                    this.bee_sound.play();
                    lastBeeSoundTime = currentTime; // Zeitpunkt aktualisieren
                }
            }
        
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
                this.thunder_sound.play();
            }
        
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
        


        setInterval( () => {

            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) { // sorgt dafür, dass er in beide Richtungen läuft.
                //Walk animation
                this.playAnimation(this.IMAGES_WALKING);
            }            
        }, 100);
    }

    jump() {

    }
}