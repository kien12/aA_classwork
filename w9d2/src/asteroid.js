const MovingObject = require("./moving_object");
const Util = require("./util")

function Asteroid () {
    this.color = "blue";
    this.radius = 125;
    this.pos = [7,5];
    this.vec = Util.randomVec;

    super()

}
Asteroid.inherit(MovingObject)