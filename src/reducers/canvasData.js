class Tile {
  constructor(x, y, color) {
    this.x = x
    this.y = y
    this.color = color
  }
}

class CanvasData {
  constructor(w, h) {
    this.width = w
    this.height = h

    this.canvas = []

    const initTileColor = '#ff00ff'
    for (let i = 0; i < this.height; i++) {
      const currentRow = []
      for (let j = 0; j < this.width; j++) {
        currentRow.push(new Tile(j, i, initTileColor))
      }
      this.canvas.push(currentRow)
    }
  }

  setTileColor(x, y, color) {
    this.canvas[y][x].color = color
  }
}

const canvasData = (state=new CanvasData(12, 12), action) => {
  switch (action.type) {
    case 'SET_CANVAS_COLOR':
      state.setTileColor(action.payload.x, action.payload.y, action.payload.color)
      return state
    default:
      return state
  }
}

export default canvasData
