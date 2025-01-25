class Level {
    enemies;
    clouds;
    landscape;
    level_end_x = 2200;

    constructor(enemies, clouds, landscape) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.landscape = landscape;
    }
}