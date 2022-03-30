// import { createStore } from "redux";
// import postsReducer from "./reducers/postsReducer";

// const store = createStore(postsReducer);

// export default store;

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../rootSaga";
import postsReducer from "./reducers/postsReducer";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  postsReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    ...(window.__REDUX_DEVTOOLS_EXTENSION__
      ? [
          window.__REDUX_DEVTOOLS_EXTENSION__({
            serialize: true,
          }),
        ]
      : [])
  )
);

sagaMiddleware.run(rootSaga);

export default store;
