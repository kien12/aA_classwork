function GameView(game, ctx) {
    this.game = game;
    this.ctx = ctx;
}

GameView.prototype.start = function() {
    setInterval(this.game.moveObject, 20);
    setInterval(this.game.draw, 20);

}

module.exports = GameView;