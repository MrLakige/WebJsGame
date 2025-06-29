import Map  from '../entities/Map.js';
import Pacman  from '../entities/Pacman.js';
import Input from './Input.js';

export default class Manager{
    constructor(){
        this.score = 0;
        this.updateScore(0);
        this.maxScore = this.getMaxScore();
        this.map = new Map();
        this.pacman = new Pacman("player",this);
        this.input = new Input(this);
    }



    move(direction){
        this.pacman.move(direction);
        // TODO: move ghosts
    }

    checkPosition(x, y, size){
        const corners = [
            { x: x - size, y: y - size }, // top-left
            { x: x - size, y: y + size }, // bottom-left
            { x: x + size, y: y - size }, // top-right
            { x: x + size, y: y + size }  // bottom-right
        ];

        const cornerValues = corners.map(corner => ({
            ...corner,
            value: this.map.getPosValue(corner.x, corner.y)
        }));

        if (cornerValues.some(c => c.value === 1)) {
            return false;
        }

        const pelletCorner = cornerValues.find(c => c.value === 2);
        if (pelletCorner) {
            this.addPoint();
            this.map.clearPelletAt(pelletCorner.x, pelletCorner.y);
            if(this.score == this.maxScore){
                document.getElementById("winMessage").value = GAME_CONFIG.winMessage;
                document.getElementById("winMessage").style.display = "block";
                document.getElementById("btnStart").value = "play again";
                document.getElementById("btnStart").style.display = "block";
                document.getElementById("gameCanvas").style.display="none";
            }
            return true;
        }
        return true;

    }

    draw(ctx) {
        this.map.draw(ctx);
        this.pacman.draw(ctx);
    }

    addPoint(amount = 1) {
        this.score += amount;
        this.updateScore(this.score);
    }

    updateScore(score) {
        const scoreElement = document.getElementById("point");
        if (scoreElement) {
            scoreElement.textContent = `Score: ${score}`;
        }
    }

    getMaxScore(){
        const layout = GAME_CONFIG.map.layout;
        var maxPoints = 0;
        for (let row = 0; row < layout.length; row++) {
            for (let col = 0; col < layout[row].length; col++) {
                const tile = layout[row][col];
                if (tile === 2) {
                    maxPoints++;
                }
            }
        }
        return maxPoints;
    }
}