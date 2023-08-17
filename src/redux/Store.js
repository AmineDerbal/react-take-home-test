import { configureStore } from '@reduxjs/toolkit';
import ballotReducer from './ballot/ballotSlice';

const store = configureStore({
  reducer: {
    ballot: ballotReducer,
  },
});

export default store;
