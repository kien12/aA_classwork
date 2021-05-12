const MovingObject = require("./moving_object");
const Util = require("./util")

function Asteroid (obj) {
    obj.color = "blue";
    obj.radius = 20;
    // obj.pos = obj.pos;
    obj.vel = Util.randomVec(4);

    MovingObject.call(this, obj)
}

Util.inherits(Asteroid, MovingObject);
module.exports = Asteroid;