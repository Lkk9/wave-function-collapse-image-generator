import inputImageData from './inputImageData';
import outputImageData from './outputImageData';
import inputImageSetup from './inputImageSetup';

import {combineReducers} from 'redux';

export const reducers = combineReducers({
  inputImageData,
  outputImageData,
  inputImageSetup
})
