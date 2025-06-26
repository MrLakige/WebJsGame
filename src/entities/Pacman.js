export default class Pacman{

    constructor(name, manager){
        this.name = name;
        this.manager = manager;
        this.imageLoaded = false;
        // set starting position
        this.x = 0;
        this.y = 0;    
        // load pacman configuration
        this.speed = GAME_CONFIG.playerSpeed;
        this.image = new Image();
        this.image.src = GAME_CONFIG.assetPaths.pacman; 
        this.mapRows = GAME_CONFIG.mapRows;
        this.mapCols = GAME_CONFIG.mapCols;
        // load image
        this.image.onload = () => {
            this.imageLoaded = true;
        };
    }

    move(direction){
        var tempX = this.x;
        var tempY = this.y;
        console.log("pacman move ", direction);
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
        if(this.manager.checkPosition(tempX, tempY)){
            this.x = tempX;
            this.y = tempY;
        }
    }

    draw(ctx) {
        if (this.imageLoaded) {
            ctx.drawImage(this.image, this.x, this.y, GAME_CONFIG.tileSize, GAME_CONFIG.tileSize);
        }
    }

    setMapSize(x, y){
        this.x=x;
        this.y=y;
    }
}