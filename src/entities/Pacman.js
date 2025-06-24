class Pacman{
    constructor(name, gameManager){
        this.name = player_name;
        this.gameManager = gameManager;
        // set starting position
        this.x = 0;
        this.y = 0;    
        // load pacman configuration
        this.speed = GAME_CONFIG.playerSpeed;
        this.image = new Image();
        this.image = GAME_CONFIG.assetPaths.pacman; 
        this.mapRows = GAME_CONFIG.mapRows;
        this.mapCols = GAME_CONFIG.mapCols;
    }

    move(direction){
        tempX = this.x;
        tempY = this.y;
        switch(direction){
            case "left":
                if(tempX-this.speed < 0){
                    tempX=this.mapCols;
                }else{
                    tempX -= this.speed;
                }
                break;
            case "right":
                if(tempX+this.speed > this.mapCols){
                    tempX=0;
                }else{
                    tempX+= this.speed;
                }
                break;
            case "up":
                if(tempY - this.speed < 0){
                    tempY=this.mapRows;
                }else{
                    tempY -= this.speed;
                }
                break;
            case "down":
                if(tempY + this.speed > this.mapRows){
                    tempY=0;
                }else{
                    tempY += this.speed;
                }
                break;
        }
        if(this.gameManager.checkPosition(tempX, tempY)){
            this.x = tempX;
            this.y = tempY;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, GAME_CONFIG.tileSize, GAME_CONFIG.tileSize);
    } 

    setMapSize(x, y){
        this.x=x;
        this.y=y;
    }
}