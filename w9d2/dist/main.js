/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\")\n\nfunction Asteroid (options) {\n    options = options || {};\n    options.color = \"blue\";\n    options.radius = 125;\n    options.pos = options.pos;\n    options.vel = Util.randomVec(100);\n\n    MovingObject.call(this, options)\n\n}\nUtil.inherits(Asteroid, MovingObject);\nlet asteroidd = new Asteroid({ pos: [30, 30] });\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nfunction Game() {\n    this.asteroids = [];\n    this.addAsteroids();\n}\n\nGame.DIM_X = 300;\nGame.DIM_Y = 300;\nGame.NUM_ASTEROIDS = 10;\n\n\nGame.prototype.randomPosition = function() {\n    x = Math.random() * 300;\n    y = Math.random() * 300;\n    return [x, y];\n}\n\nGame.prototype.addAsteroids = function() {\n    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n         this.asteroids.push(new Asteroid( { pos: this.randomPosition} ));\n    }\n}\n\nGame.prototype.draw = function(ctx) {\n    ctx.clearRect();\n    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n        this.asteroids[i].move;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/gameview.js":
/*!*************************!*\
  !*** ./src/gameview.js ***!
  \*************************/
/***/ ((module) => {

eval("function GameView(game, ctx) {\n    this.game = game;\n    this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n    setInterval(this.game.moveObject, 20);\n    setInterval(this.game.draw, 20);\n\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/gameview.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst GameView = __webpack_require__(/*! ./gameview.js */ \"./src/gameview.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\n// window.GameView = GameView;\nwindow.Game = Game;\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const canvas = document.getElementById(\"game-canvas\")\n    canvas.width = 500;\n    canvas.height = 500;\n    const ctx = canvas.getContext(\"2d\");\n    // window.ctx = ctx;\n    const game = new Game();\n    new GameView(game, ctx).start();\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("\nfunction MovingObject (obj) {\n    this.pos = obj.pos; //[1,0]\n    this.vel = obj.vel; //[2, 1]\n    this.radius = obj.radius;\n    this.color = obj.color;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n    ctx.fillStyle = this.color;\n\n    ctx.beginPath();\n    ctx.arc(\n        this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true\n    );\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function () {\n    this.pos[0] += this.vel[0]\n    this.pos[1] += this.vel[1]\n}\n\n\nmodule.exports = MovingObject;\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("\nconst Util = {\n    inherits(childClass, parentClass) {\n        childClass.prototype = Object.create(parentClass.prototype)\n        childClass.prototype.constructor = childClass\n    },\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;