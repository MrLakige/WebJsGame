import Manager from './logic/Manager.js';

const manager = new Manager();

window.startGame = function () {
    console.log("Game started");
    // Add your game loop or logic here
    gameLoop();
};


function gameLoop() {
    var canvas = document.getElementById('gameCanvas');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    manager.getPacman().draw(ctx); 

    requestAnimationFrame(gameLoop);
}
