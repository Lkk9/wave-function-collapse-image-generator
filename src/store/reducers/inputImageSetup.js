import ImageData from '../../helpers/imageDataClass.js';
import InputImageData from '../../helpers/inputImageDataClass.js';

const inputImageSetup = (state=new InputImageData(12, 12), action) => {
  switch (action.type) {
    case 'FIX_TILE_BACKGROUND':
      state.setTileBackground(action.payload.x, action.payload.y, action.payload.background)
      return state
    case 'CHANGE_SETUP_SIZE':
      state.setSize(action.payload.width, action.payload.height)
      return state
    default:
      return state
  }
}

export default inputImageSetup
