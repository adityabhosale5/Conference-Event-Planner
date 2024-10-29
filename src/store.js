// store.js
import { configureStore } from '@reduxjs/toolkit';
import plantReducer from './plantSlice';
import afplantReducer from './afplantSlice';

export default configureStore({
  reducer: {
    plant: plantReducer,
    afplant: afplantReducer
  },
});
