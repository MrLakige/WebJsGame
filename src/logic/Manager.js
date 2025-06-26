import Map  from '../entities/Map.js';
import Pacman  from '../entities/Pacman.js';
import Input from './Input.js';

export default class Manager{
    constructor(){
        this.map = new Map();
        this.pacman = new Pacman("player",this);
        this.input = new Input(this);
    }

    move(direction){
        this.pacman.move(direction);
        // TODO: move ghosts
    }

    checkPosition(x, y){
        return this.map.isWall(x, y);
    }

    draw(ctx) {
        this.map.draw(ctx);
        this.pacman.draw(ctx);
    }
}