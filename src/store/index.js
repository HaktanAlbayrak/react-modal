import { configureStore } from '@reduxjs/toolkit';
import modal from './modal';

const store = configureStore({
  reducer: {
    modal,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
