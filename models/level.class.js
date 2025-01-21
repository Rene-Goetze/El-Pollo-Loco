class Level {
    enemies;
    clouds;
    landscape;
    level_end_x = 700;

    constructor(enemies, clouds, landscape) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.landscape = landscape;
    }
}