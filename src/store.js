import createSagaMiddleware from 'redux-saga';
import countryDetailsSaga from './sagas/countryDetailsSaga';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export const setupStore = (preloadedState) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
    preloadedState,
  });

  sagaMiddleware.run(countryDetailsSaga);

  return store;
};

export default setupStore;
