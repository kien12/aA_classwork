import ReactDOM from 'react-dom';
import React from 'react';
import Game from './components/game';
import Tile from './components/tile';
import Board from './components/board';

// const Game = () => {
//     return (
//         <div>
//             <Board />
//         </div>
//     )
// }

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("main");
    ReactDOM.render(<Game />, root);
});