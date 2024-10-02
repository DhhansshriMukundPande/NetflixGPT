import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Import the default export (userReducer) from userSlice
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"
const appStore = configureStore({
  reducer: {
    user: userReducer ,// Use userReducer here
    movies:movieReducer,
    gpt:gptReducer,
    config:configReducer
  }
});

export default appStore;