class Chicken extends MovableObject {
    y = 380;
    height = 80;
    width = 50;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    chicken_sound = new Audio('audio/chicken2.mp3');
    lastSoundTime = 0; 
    
    constructor() {
        super();
        this.loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png')
        this.loadImages(this.IMAGES_WALKING);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.1 + Math.random() * 0.25;
        this.animate(); 
    }


    animate() {
        this.moveLeft();
        let lastSoundTime = 0;
        this.chicken_sound.volume = 0;

        setInterval( () => {
            let now = Date.now();
            if (now - lastSoundTime > 10000) { // Sound nur alle 2 Sekunden
                this.chicken_sound.play().catch(error => console.log(error)); // Falls der Browser blockiert, wird der Fehler geloggt
                lastSoundTime = now;
            }

            this.playAnimation(this.IMAGES_WALKING);
        }, 420);
    }
}