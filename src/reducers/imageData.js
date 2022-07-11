class Tile {
  constructor(x, y, background) {
    this.x = x
    this.y = y
    this.background = background
  }
}

class ImageData {
  constructor(w, h) {
    this.width = w > 32 ? 32 : w < 2 ? 2 : w
    this.height = h > 32 ? 32 : h < 2 ? 2 : h
    this.image = []

    const initTileBackground = '#ff00ff'
    for (let i = 0; i < this.height; i++) {
      const currentRow = []
      for (let j = 0; j < this.width; j++) {
        currentRow.push(new Tile(j, i, initTileBackground))
      }
      this.image.push(currentRow)
    }
  }

  setTileBackground(x, y, background) {
    this.image[y][x].background = background
  }
}

const imageData = (state=new ImageData(12, 12), action) => {
  switch (action.type) {
    case 'SET_TILE_BACKGROUND':
      state.setTileBackground(action.payload.x, action.payload.y, action.payload.background)
      return state
    default:
      return state
  }
}

export default imageData
