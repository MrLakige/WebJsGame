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

    checkPosition(x, y, size){
        const valLtop = this.map.getPosValue(x-size, y-size);
        const valLbottom = this.map.getPosValue(x-size, y+size);
        const valRtop = this.map.getPosValue(x+size, y-size);
        const valRbottom = this.map.getPosValue(x+size, y+size);
        console.log(valLtop, valLbottom, valRbottom, valRtop);
        if(valLtop == 1 || valLbottom == 1 || valRtop == 1 || valRbottom == 1){
            return false;
        }else{
            return true;
        }
    }

    draw(ctx) {
        this.map.draw(ctx);
        this.pacman.draw(ctx);
    }
}