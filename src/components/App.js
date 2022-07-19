import React, {useState} from 'react';
import InputImage from './inputImage/InputImage';
import OutputImage from './outputImage/OutputImage';

import {useDispatch, useSelector} from 'react-redux';
import generateImage from '../store/actions/generateImage.js';
import changeDataSize from '../store/actions/changeDataSize.js';
import changeSetupSize from '../store/actions/changeSetupSize.js';

import {Box, Button, Stack, Slider, Typography} from '@mui/material';

const App = () => {
  const [rerender, setRerender] = useState(false)
  const dispatch = useDispatch()
  const imageSetup = useSelector(state => state.inputImageSetup)
  const imageData = useSelector(state => state.inputImageData)

  return <Box
    sx={{
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 2
  }}
  >


    <Box
      sx={{
        display: 'flex',
        height: '100%',
        width: '50%',
        '& > * + *': {
          marginLeft: '100px'
        }
      }}
    >
      <InputImage imageData={imageData} imageType={'data'}/>
      <InputImage imageData={imageSetup} imageType={'setup'}/>
    </Box>

    <Box
      sx={{
        width: '200px',
        display: 'inline-grid'
      }}
    >
      <Box>
      <Typography>Data size</Typography>
      <Slider min={2} max={20} onChange={(e) => {
        dispatch(changeDataSize(e.target.value)) // TODO: fix 2 params ui bug
        setRerender(!rerender)
      }}/>
      </Box>

      <Box>
      <Typography>Setup size</Typography>
      <Slider min={2} max={20} onChange={(e) => {
        dispatch(changeSetupSize(e.target.value))
        setRerender(!rerender)
      }}/>
      </Box>
    </Box>



    <Button
      variant='contained'
      onClick={() => dispatch(generateImage(imageData, imageSetup))}
      >generate
    </Button>

    <OutputImage />

  </Box>
}

export default App;
