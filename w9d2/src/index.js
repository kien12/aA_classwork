const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Util = require("./util.js");
window.MovingObject = MovingObject;
window.Asteroid = Asteroid;


document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("game-canvas")
    canvas.width = 500;
    canvas.height = 500;
    const ctx = canvas.getContext("2d");
    window.ctx = ctx;
})

