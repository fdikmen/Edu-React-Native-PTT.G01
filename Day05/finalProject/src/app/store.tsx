import { configureStore } from '@reduxjs/toolkit';
// Slices import edilir
import counterReducer from '../redux/mySlice';
import userReducer from '../redux/userSlice';

export const store = configureStore({
  reducer: {
    // burada slice'lar eklenir
    counter:counterReducer,
    userReducer,
  },
});

// export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
