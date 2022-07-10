import React from 'react';

import {useSelector} from 'react-redux';

import {Box} from '@mui/material';

const Canvas = () => {
  const canvasData = useSelector(state => state.canvasData)

  const canvasWidth = canvasData.width
  const canvasHeight = canvasData.height

  return <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: `repeat(${canvasWidth}, 1fr)`,
      gridTemplateRows: `repeat(${canvasHeight}, 1fr)`
    }}
  >
    {[...Array(canvasWidth*canvasHeight).fill(null).map((_,i) => {

    const currentY = ~~(i/canvasWidth)
    const currentX = i - currentY*canvasWidth

    return <Box
        key={i}
        sx={{
          aspectRatio: '1/1',
          border: '1px solid black',
          background: canvasData.canvas[currentY][currentX].color
        }}
      ></Box>
    })]}
  </Box>
}

export default Canvas;
