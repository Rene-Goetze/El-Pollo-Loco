class MovableObject {
        x = 120;
        y = 300;
        img;
        height = 150;
        width = 100;
        imageCache = {};
        currentImage = 0;
        speed = 0.2;
        otherDirection = false;


        loadImage(path) {
            this.img = new Image();
            this.img.src = path;
        }
        
        /**
         * 
         * @param {Array} arr - ['img/image1.png', 'img/image2.png','img/image3.png'.... ]
         */
        loadImages(arr) {
            arr.forEach((path) => {
                let img = new Image();
                img.src = path;
                this.imageCache[path] = img;  // Bild im Cache speichern
            });
        }

        playAnimation(images) {
            if (!images || images.length === 0) {  // Falls `images` leer oder `undefined` ist, Fehler vermeiden
                console.error("playAnimation wurde mit einem leeren oder undefinierten Array aufgerufen!");
                return;
            }
        
            let i = this.currentImage % images.length; //  Nutze das übergebene `images`-Array
            let path = images[i];  //  Nutze `images[i]` statt `this.images[i]`
            
            this.img = this.imageCache[path];  //  Holt das Bild aus dem Cache
            this.currentImage++;
        }
        

        moveRight() {
            console.log('Moving right');
        }

        moveLeft() {
            setInterval(() => {
                this.x -= this.speed;
            }, 1000 / 60 );
        }
}