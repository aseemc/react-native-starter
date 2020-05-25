import { combineReducers } from '@reduxjs/toolkit';

import { slice } from './exampleState';

export default combineReducers({
  example: slice.reducer,
});
