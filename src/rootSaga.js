import { all } from "redux-saga/effects";
import { watchAddPost, watchFetchPosts } from "./redux/postsSaga";

// Add the sagas in this array
const sagasList = [watchFetchPosts(), watchAddPost()];

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all(sagasList);
}
