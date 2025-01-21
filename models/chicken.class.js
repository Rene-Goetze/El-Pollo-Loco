class Chicken extends MovableObject {
    y = 380;
    height = 80;
    width = 50;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    
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

        setInterval( () => {
            let i = this.currentImage % this.IMAGES_WALKING.length; // Zeile sorgt dafür, dass das Array wieder bei 0 beginnt.
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 420);
    }
}