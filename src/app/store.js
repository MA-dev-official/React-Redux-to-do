import { configureStore } from '@reduxjs/toolkit';
import  TodoReducers  from '../features/TodoSlice.js';


const store = configureStore({
  reducer: {
    todos : TodoReducers
  }
});

export default store;