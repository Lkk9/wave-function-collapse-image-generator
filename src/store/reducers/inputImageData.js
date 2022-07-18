import ImageData from '../../helpers/imageDataClass.js';

class InputImageData extends ImageData {

  setTileBackground(x, y, background) {
    this.image[y][x].background = background
  }
}

const inputImageData = (state=new InputImageData(10, 10), action) => {
  switch (action.type) {
    case 'SET_TILE_BACKGROUND':
      state.setTileBackground(action.payload.x, action.payload.y, action.payload.background)
      return state
    default:
      return state
  }
}

export default inputImageData
