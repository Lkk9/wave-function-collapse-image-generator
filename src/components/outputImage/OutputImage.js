import React, {useRef, useEffect} from 'react';

import {useSelector} from 'react-redux';

const OutputImage = () => {

  const imageData = useSelector(state => state.imageData)
  const imageWidth = imageData.width
  const imageHeight = imageData.height

  const canvasRef = useRef(null)
  useEffect(() => {
    const update = () => {
      const canvas = canvasRef.current

      const canvasWidth = canvas.offsetWidth

      const tileSize = ~~(canvasWidth/imageWidth)

      canvas.width = tileSize*imageWidth
      canvas.height = tileSize*imageHeight

      const ctx = canvas.getContext('2d')

      for (let i = 0; i < imageHeight; i++) {
        for (let j = 0; j < imageWidth; j++) {
          ctx.fillStyle = imageData.image[i][j].background

          const x = j*tileSize
          const y = i*tileSize

          ctx.fillRect(x, y, tileSize, tileSize)
        }
      }
    }

    window.addEventListener('resize', update)
    update()
    return () => window.removeEventListener('resize', update)
  }, [imageHeight, imageWidth, imageData.image])


  return <canvas style={{
    width: '100%',
    height: '100%'
  }} ref={canvasRef}></canvas>
}

export default OutputImage;
