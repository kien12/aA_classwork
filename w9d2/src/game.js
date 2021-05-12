const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Util = require("./util.js");

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
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid( { pos: this.randomPosition()} ));
    }
    console.log(this.asteroids)
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, 500, 500);
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        this.asteroids[i].draw(ctx);
    }
}

Game.prototype.moveObjects = function () {
    console.log(this, "Testing")
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        console.log(this.asteroids[i])
        let asteroid = this.asteroids[i];
        asteroid.move();
    }
}

module.exports = Game