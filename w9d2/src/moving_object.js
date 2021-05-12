
function MovingObject (obj) {
    this.pos = obj.pos; //[1,0]
    this.vel = obj.vel; //[2, 1]
    this.radius = obj.radius;
    this.color = obj.color;
}

MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;

    ctx.beginPath();
    ctx.arc(
        this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    );
    ctx.fill();
}

MovingObject.prototype.move = function () {
    let offsetX = this.vel[0]
    let offsetY = this.vel[1]
    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY]
    console.log(this.pos, "this is the position")
}


module.exports = MovingObject;

