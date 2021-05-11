
function Game() {
    this.asteroids = [];
    this.addAsteroids();
}

Game.DIM_X = 300;
Game.DIM_Y = 300;
Game.NUM_ASTEROIDS = 10;


Game.prototype.randomPosition = function() {
    x = Math.random() * 300;
    y = Math.random() * 300;
    return [x, y];
}

Game.prototype.addAsteroids = function() {
    
this.asteroids.push(this.randomPosition)
}
