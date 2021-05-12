const View = require("./ttt-view"); // require appropriate file
const Game = require("../ttt-solutions/game"); // require appropriate file

  $(() => {
    const root = $('.ttt');
    const game = new Game();
    new View(game, root);
  });
