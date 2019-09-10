
import { all, fork} from 'redux-saga/effects';
import {userSagas} from './user';
import {counterSagas} from './counter';
import {watchLogSagas} from './watch-and-log';
//必须加 yield 
//yield [] 并发执行的意思，不会等待，同时进行
export default function* rootSaga() {
  // yield all([
  //     fork(watchIncrementAsync),
  //   ])
  // yield all ([
  //   ...Object.values(counterSagas),
  //   ...Object.values(userSagas)
  // ].map(fork))
  yield all([
    ...counterSagas,
    ...userSagas,
    ...watchLogSagas
  ]);
  
}