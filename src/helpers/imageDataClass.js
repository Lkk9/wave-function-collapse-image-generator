import Tile from './tileClass.js';

class ImageData {
  constructor(w, h) {
    this.width = w
    this.height = h
    this.image = []

    for (let i = 0; i < this.height; i++) {
      const currentRow = []
      for (let j = 0; j < this.width; j++) {
        currentRow.push(new Tile(j, i))
      }
      this.image.push(currentRow)
    }
  }
}

export default ImageData
