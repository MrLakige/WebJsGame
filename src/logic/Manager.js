import Pacman  from '../entities/Pacman.js';
import Input from './Input.js';

export default class Manager{
    constructor(){
        this.pacman = new Pacman("player",this);
        this.input = new Input(this);
    }

    move(direction){
        this.pacman.move(direction);
        // TODO: move ghosts
    }

    checkPosition(tempX, tempY){
        return true;
    }

    getPacman(){
        return this.pacman;
    }
}