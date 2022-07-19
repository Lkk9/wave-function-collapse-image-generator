const generateImage = (inputImageData, inputImageSetup) => {
  return {
    type: 'GENERATE_IMAGE',
    payload: {
      data: inputImageData,
      setup: inputImageSetup
    }
  }
}

export default generateImage
