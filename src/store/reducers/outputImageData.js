import ImageData from '../../helpers/imageDataClass.js';
import Tile from '../../helpers/tileClass.js';

class OutputImageData extends ImageData {
  constructor(resolutionOfTile=120) {
    super(1,1)
    this.resolution = resolutionOfTile//px

    super.init()
  }

  getImage(inputImageData, inputImageSetup) {
    super.setSize(inputImageSetup.width, inputImageSetup.height)

    const minH = Math.min(inputImageData.image.length, this.image.length)
    const minW = Math.min(inputImageData.image[0].length, this.image[0].length)

    for (let i = 0; i < minH; i++)
    for (let j = 0; j < minW; j++)
      this.image[i][j].background = inputImageData.image[i][j].background

  }
}

const initState = new OutputImageData()

const outputImageData = (state=initState, action) => {
  switch (action.type) {
    case 'GENERATE_IMAGE':
      state.getImage(action.payload.data, action.payload.setup)
      return state
    default:
      return state
  }
}

export default outputImageData
