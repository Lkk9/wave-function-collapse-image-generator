const initTileBackgroundFunctionCreator = (type) => {
  return (x, y, background) => {
    return {
      type: type,
      payload: {
        x,
        y,
        background
      }
    }
  }
}

export default initTileBackgroundFunctionCreator
