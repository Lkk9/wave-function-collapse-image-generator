export const setCanvasColor = (x, y, color) => {
  return {
    type: 'SET_CANVAS_COLOR',
    payload: {
      x,
      y,
      color
    }
  }
}
