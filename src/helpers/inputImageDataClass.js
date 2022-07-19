import ImageData from './imageDataClass.js';

class InputImageData extends ImageData {

  setTileBackground(x, y, background) {
    this.image[y][x].background = background
  }
}

export default InputImageData
