const MovingObject = require("./moving_object");
const Util = require("./util")

function Asteroid (options) {
    options = options || {};
    options.color = "blue";
    options.radius = 125;
    options.pos = options.pos;
    options.vel = Util.randomVec(100);

    MovingObject.call(this, options)

}
Util.inherits(Asteroid, MovingObject);
let asteroidd = new Asteroid({ pos: [30, 30] });
module.exports = Asteroid;