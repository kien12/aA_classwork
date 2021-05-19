import ReactDOM from 'react-dom';
import React from 'react';
import Game from './components/game';

const Game = () => {
    return (
        <div>
            <Board />
        </div>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("main");
    ReactDOM.render(<Game />, root);
});