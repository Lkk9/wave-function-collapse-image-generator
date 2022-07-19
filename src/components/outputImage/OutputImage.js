import React, {useRef, useEffect} from 'react';

import {useSelector} from 'react-redux';

import {Paper} from '@mui/material';

const OutputImage = () => {

  const imageData = useSelector(state => state.outputImageData)

  const canvasRef = useRef(null)
  useEffect(() => {
    const int = setInterval(() => {

    const imageWidth = imageData.width
    const imageHeight = imageData.height
    const resolution = imageData.resolution

    const canvas = canvasRef.current

    canvas.width = resolution*imageWidth
    canvas.height = resolution*imageHeight

    const tileSize = canvas.width/imageWidth

    const ctx = canvas.getContext('2d')

    for (let i = 0; i < imageHeight; i++) {
      for (let j = 0; j < imageWidth; j++) {
        ctx.fillStyle = imageData.image[i][j].background

        const x = j*tileSize
        const y = i*tileSize

        ctx.fillRect(x, y, tileSize, tileSize)
      }
    }

  })
  return () => clearInterval(int)

}, [])


  return <Paper
      sx={{
        width: 1/5,
        overflow: 'hidden',
        display: 'flex'
      }}
      ><canvas style={{
    width: '100%',
    height: '100%'
  }} ref={canvasRef}></canvas>
  </Paper>
}

export default OutputImage;
