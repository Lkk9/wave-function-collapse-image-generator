import Tile from './tileClass.js';

class ImageData {
  constructor(w, h) {
    this.width = w
    this.height = h
    this.image = []

    this.init()
  }

  init(rememberImage=false) {
    // TODO: optimize
    const lastImage = JSON.parse(JSON.stringify(this.image))
    this.image = Array(this.height).fill(null).map((_,y) => Array(this.width).fill(null).map((_,x) => {

      if (rememberImage && y < lastImage.length && x < lastImage[0].length) {
        console.log(lastImage);
        return lastImage[y][x]
      }
      let c = 100
      if ((x + y) % 2 === 0) c = 200

      c = `rgb(${~~(255*x/this.width)}, ${~~(255*y/this.height)}, ${c})`

      return new Tile(x, y, c)

    }))
  }

  setSize(w, h) {
    this.width = w
    this.height = h
    this.init(true)
  }
}

export default ImageData
