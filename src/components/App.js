import React from 'react';
import InputImage from './inputImage/InputImage';
import OutputImage from './outputImage/OutputImage';

import {useDispatch, useSelector} from 'react-redux';
import generateImage from '../store/actions/generateImage.js';

import {Box, Button} from '@mui/material';

const App = () => {
  const dispatch = useDispatch()
  const inputImage = useSelector(state => state.inputImageData.image)

  return <Box
    sx={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  }}
  >

    <InputImage />

    <Button
      variant='contained'
      onClick={() => dispatch(generateImage(inputImage))}
      >generate
    </Button>

    <OutputImage />

  </Box>
}

export default App;
