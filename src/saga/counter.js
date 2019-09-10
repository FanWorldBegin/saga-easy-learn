import { INCREMENT_ASYNC } from '../constants/counters';
import { takeEvery, put, takeLatest, call, all } from 'redux-saga/effects';
//redux-saga中也带有delay 方法
const delay = (ms) => new Promise( resolve => setTimeout(resolve, ms))
//生成器方法
function* incrementAsync() {
  yield call(delay, 2000); //延迟2秒
  //put - dispatch action
  yield put({type: 'INCREMENT'})
  //yield put(increment());
}
/*
  在每个 `INCREMENT_ASYNC` action 被 dispatch 时调用 
  允许并发（译注：即同时处理多个相同的 action）
*/
export function* watchIncrementAsync() {
  yield takeLatest(INCREMENT_ASYNC, incrementAsync);
}

export const counterSagas = [
  watchIncrementAsync()
]