const generateImage = (inputImageArray) => {
  return {
    type: 'GENERATE_IMAGE',
    payload: inputImageArray
  }
}

export default generateImage
