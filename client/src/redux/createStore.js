import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import { saveLocalStorage } from './middlewares/localStorage';

export default () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware().concat([
      saveLocalStorage
    ]),
    devTools: true,
  })
};