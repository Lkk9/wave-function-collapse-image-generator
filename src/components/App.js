import React from 'react';
import Canvas from './Canvas';

import {Box} from '@mui/material';

const App = () => {

  return <Box
    sx={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  }}
  >

    <Box
      sx={{
        width: 1/3,
      }}
    >
      <Canvas/>
    </Box>


  </Box>
}

export default App;
