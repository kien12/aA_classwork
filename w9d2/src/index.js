const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("game-canvas")
    canvas.width = 500;
    canvas.height = 500;
    const ctx = canvas.getContext("2d")
})

