import Manager from './logic/Manager.js';

var manager;

window.startGame = function () {
    console.log("Game started");
    manager = new Manager();
    const canvas = document.getElementById("gameCanvas");
    canvas.style.display="block";
    document.getElementById("btnStart").style.display = "none";
    canvas.width = GAME_CONFIG.map.tileSize * GAME_CONFIG.map.cols;
    canvas.height = GAME_CONFIG.map.tileSize * GAME_CONFIG.map.rows;
    gameLoop();
};


function gameLoop() {
    var canvas = document.getElementById('gameCanvas');
    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    manager.draw(ctx); 

    requestAnimationFrame(gameLoop);
}


