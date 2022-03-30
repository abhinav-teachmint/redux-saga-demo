import { call, put, takeEvery } from "redux-saga/effects";
import * as Api from "../api/postsApi";

export function* watchFetchPosts() {
  yield takeEvery("LOAD_POSTS_REQUESTED", fetchPosts);
}

function* fetchPosts() {
  try {
    const res = yield call(Api.fetchPosts);
    console.log(res);
    yield put({
      type: "LOAD_POSTS_SUCCESS",
      payload: res,
    });
  } catch (e) {
    yield put({
      type: "LOAD_POSTS_FAILED",
      payload: e.message,
    });
  }
}

export function* watchAddPost() {
  yield takeEvery("ADD_POST_REQUESTED", addPost);
}

function* addPost(action) {
  try {
    const res = yield call(Api.addPost, action.payload);
    console.log(res);
    yield put({
      type: "ADD_POST_SUCCESS",
      payload: res,
    });
  } catch (e) {
    yield put({
      type: "ADD_POST_FAILED",
      payload: e.message,
    });
  }
}
