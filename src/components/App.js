import React from 'react';
import InputImage from './inputImage/InputImage';
import OutputImage from './outputImage/OutputImage';

import {Box, Button, Paper} from '@mui/material';

const App = () => {

  return <Box
    sx={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  }}
  >

    <Paper
      sx={{
        width: 1/3,
        overflow: 'hidden'
      }}
      ><InputImage />
    </Paper>

    <Button
      variant='contained'
      onClick={() => 1}
      >generate
    </Button>

    <Paper
      sx={{
        width: 1/5,
        overflow: 'hidden',
        display: 'flex'
      }}
      ><OutputImage />
    </Paper>


  </Box>
}

export default App;
