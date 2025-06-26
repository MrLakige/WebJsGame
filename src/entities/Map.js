
export default class Map {
  constructor() {
    this.layout = GAME_CONFIG.map_layout;
    this.tileSize = GAME_CONFIG.tileSize; 
  }

  draw(ctx) {
    for (let row = 0; row < this.layout.length; row++) {
      for (let col = 0; col < this.layout[row].length; col++) {
        const tile = this.layout[row][col];
        const x = col * this.tileSize;
        const y = row * this.tileSize;

        if (tile === 1) {
            // Wall
            ctx.fillStyle = 'blue';
            ctx.fillRect(x, y, this.tileSize, this.tileSize);
        } else if (tile === 2) {
            // Pellet
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(
                x + this.tileSize / 2,
                y + this.tileSize / 2,
                this.tileSize / 6,
                0,
                Math.PI * 2
            );
            ctx.fill();
        }
        // else tile === 0 → empty
      }
    }
  }

  isWall(x, y) {
    const col = Math.floor(x / this.tileSize);
    const row = Math.floor(y / this.tileSize);
    return this.layout[row]?.[col] === 1;
  }
}
