const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Util = require("./util.js");
const GameView = require("./gameview.js");
const Game = require("./game.js");



window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
// window.GameView = GameView;
window.Game = Game;


document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("game-canvas")
    canvas.width = 500;
    canvas.height = 500;
    const ctx = canvas.getContext("2d");
    window.ctx = ctx;
    const game = new Game();
    // window.game = game
    new GameView(game, ctx).start();
})

