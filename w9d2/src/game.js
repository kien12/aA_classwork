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
         this.asteroids.push(new Asteroid( { pos: this.randomPosition} ));
    }
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect();
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        this.asteroids[i].move;
    }
}
