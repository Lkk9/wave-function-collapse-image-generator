const setTileBackground = (x, y, background) => {
  return {
    type: 'SET_TILE_BACKGROUND',
    payload: {
      x,
      y,
      background
    }
  }
}

export default setTileBackground
