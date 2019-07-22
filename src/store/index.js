import { persistStore } from "redux-persist";
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import persistReducers from "./persistReducers";
import reducers from "./ducks";
import sagas from "./sagas";

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddleware];

const composer =
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(...middlewares),
        console.tron.createEnhancer()
      )
    : applyMiddleware(...middlewares);

const store = createStore(persistReducers(reducers), composer);

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
