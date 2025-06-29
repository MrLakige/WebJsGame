export default class Pacman{

    constructor(name, manager){
        this.name = name;
        this.manager = manager;
        this.imageLoaded = false;
        // set starting position
        this.posOffset= GAME_CONFIG.map.tileSize;
        this.x = GAME_CONFIG.map.tileSize;
        this.y = GAME_CONFIG.map.tileSize;
        // load pacman configuration
        this.speed = GAME_CONFIG.pacman.speed;
        this.image = new Image();
        this.image.src = GAME_CONFIG.pacman.assetPath; 
        this.size = GAME_CONFIG.pacman.size;
        // load some map configuration
        this.mapRows = GAME_CONFIG.map.rows*this.posOffset;
        this.mapCols = GAME_CONFIG.map.cols*this.posOffset;
        // load image
        this.image.onload = () => {
            this.imageLoaded = true;
        };
    }

    move(direction){
        var tempX = this.x;
        var tempY = this.y;
        switch(direction){
            case 1: //up
                if(tempY - this.speed < 0){
                    tempY=this.mapRows;
                }else{
                    tempY -= this.speed;
                }
                break;
            case 2: //down
                if(tempY + this.speed > this.mapRows){
                    tempY=0;
                }else{
                    tempY += this.speed;
                }
                break;
                case 3: //left
                if(tempX-this.speed < 0){
                    tempX=this.mapCols;
                }else{
                    tempX -= this.speed;
                }
                break;
            case 4: //right
                if(tempX+this.speed > this.mapCols){
                    tempX=0;
                }else{
                    tempX+= this.speed;
                }
                break;
        }
        if(this.manager.checkPosition(tempX, tempY, this.size/2)){
            this.x = tempX;
            this.y = tempY;
        }
    }

    draw(ctx) {
        if (this.imageLoaded) {
            ctx.drawImage(this.image, this.x, this.y, this.size, this.size);
        }
    }

    setMapSize(x, y){
        this.x=x;
        this.y=y;
    }
}