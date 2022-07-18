import ImageData from '../../helpers/imageDataClass.js';
import Tile from '../../helpers/tileClass.js';

class OutputImageData extends ImageData {
  constructor(w, h, resolutionOfTile=120) {
    super(w, h)
    this.resolution = resolutionOfTile//px

    this.image = Array(h).fill(null).map((_,y) => Array(w).fill(null).map((_,x) => {

      let c = 100
      if ((x + y) % 2 === 0) c = 200

      c = `rgb(${~~(255*x/w)}, ${~~(255*y/h)}, ${c})`

      return new Tile(x, y, c)

    }))
  }

  getImage(inputImageArray) {

    const minH = Math.min(inputImageArray.length, this.image.length)
    const minW = Math.min(inputImageArray[0].length, this.image[0].length)

    for (let i = 0; i < minH; i++)
    for (let j = 0; j < minW; j++)
      this.image[i][j].background = inputImageArray[i][j].background

  }
}

const initState = new OutputImageData(12, 12)

const outputImageData = (state=initState, action) => {
  switch (action.type) {
    case 'GENERATE_IMAGE':
      state.getImage(action.payload)
      return state
    default:
      return state
  }
}

export default outputImageData
