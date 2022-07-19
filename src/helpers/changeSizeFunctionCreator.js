const changeSizeFunctionCreator = (type) => {
  return (w, h=w) => {
    return {
      type: type,
      payload: {
        width: w,
        height: h
      }
    }
  }
}

export default changeSizeFunctionCreator
