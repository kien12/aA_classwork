const Game = require("./game");

function GameView(game, ctx) {
    this.game = game;
    this.ctx = ctx;
}

GameView.prototype.start = function() {
   
setInterval(this._action.bind(this), 20);
 

}

GameView.prototype._action = function () {
    this.game.moveObjects()
    this.game.draw(this.ctx)
}

module.exports = GameView;