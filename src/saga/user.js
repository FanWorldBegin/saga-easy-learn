import { INCREMENT_ASYNC } from '../constants/counters';
import { takeEvery, put, takeLatest, call,delay, all, fork } from 'redux-saga/effects';
import axios from 'axios'



function* fetchUser() {
  // const [todos, user] = yield all([
  //   call(axios.get, 'https://jsonplaceholder.typicode.com/todos'),
  //   call(axios.get, 'https://jsonplaceholder.typicode.com/users'),
  // ])
  //fork并行执行，不会在等待两秒
  yield  fork(delay, 2000)

  try {
    const users = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
    console.log(users)
    //dispatch 一个action
    yield put({type: "FETCH_USER_SUCCEEDED", user: users});
  } catch(e) {
    yield put({type: "FETCH_USER_FAILURE", error: e});
    console.dir(e);
  }

}

function* fetchTodos() {
  const todos = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
  console.log(todos)
} 


function* watchFetchUser() {
  yield takeEvery('FETCH_USER_REQUEST', fetchUser)
}

function* watchFetchTodos() {
  yield takeEvery('FETCH_TODOS_REQUEST', fetchTodos)
}

export const userSagas = [
  watchFetchUser(),
  watchFetchTodos(),
]