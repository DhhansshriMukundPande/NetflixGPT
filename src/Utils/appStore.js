import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Import the default export (userReducer) from userSlice
import movieReducer from "./movieSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer ,// Use userReducer here
    movies:movieReducer,
  }
});

export default appStore;