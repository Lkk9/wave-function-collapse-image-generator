import React, {useState} from 'react';
import Tile from './Tile';

import {useSelector, useDispatch} from 'react-redux';
import setTileBackground from '../../store/actions/setTileBackground';
import fixTileBackground from '../../store/actions/fixTileBackground';

import {Paper} from '@mui/material';

const InputImage = ({imageData, imageType}) => {
  const [rerender, setRerender] = useState(false)
  const [mouseIsPressed, setMouseIsPressed] = useState(false)

  const dispatch = useDispatch()

  const imageWidth = imageData.width
  const imageHeight = imageData.height

  return <Paper
    sx={{
      display: 'grid',
      gridTemplateColumns: `repeat(${imageWidth}, 1fr)`,
      gridTemplateRows: `repeat(${imageHeight}, 1fr)`,
      userSelect: 'none',
      width: 1/3,
      overflow: 'hidden'
    }}
    onMouseDown={() => setMouseIsPressed(true)}
    onMouseUp={() => setMouseIsPressed(false)}
    onMouseLeave={() => setMouseIsPressed(false)}
  >
    {[...Array(imageWidth*imageHeight).fill(null).map((_,i) => {

    const currentY = ~~(i/imageWidth)
    const currentX = i - currentY*imageWidth

    const background = imageData.image[currentY][currentX].background

    return <Tile
        mouseIsPressed={mouseIsPressed}
        callback={() => {
          let currentBg
          if (background === '#000000') currentBg = '#ff00ff'
          else currentBg = '#000000'

          if (imageType === 'setup')
            dispatch(fixTileBackground(currentX, currentY, currentBg))
          else if (imageType === 'data')
            dispatch(setTileBackground(currentX, currentY, currentBg))

          setRerender(!rerender)
        }}
        key={i}
        background={background}
      />
    })]}
  </Paper>
}

export default InputImage;
