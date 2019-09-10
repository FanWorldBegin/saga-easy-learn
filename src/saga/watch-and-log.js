//日志记录
import { select, takeEvery, take } from 'redux-saga/effects'

//使用 takeEvery('*')（使用通配符 * 模式），我们就能捕获发起的所有类型的 action。
//select(selector, ...args)
//创建一个 Effect，用来命令 middleware 在当前 Store 的 state 上调用指定的选择器（即返回 selector(getState(), ...args) 的结果）。
//如果调用 select 的参数为空（即 yield select()），那么 effect 会取得完整的 state（与调用 getState() 的结果相同）。


function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select()

    console.log('action', action)
    console.log('state after', state)
  })
}

//现在让我们看看，如何使用 take Effect 来实现和上面相同的功能：
//在 take 的情况中，它将会暂停 Generator 直到一个匹配的 action 被发起了。 在以上的例子中，watchAndLog 处于暂停状态，直到任意的一个 action 被发起。

function* watchAndLogBytake() {
  while (true) {
    const action = yield take('*')
    const state = yield select()

    console.log('action', action)
    console.log('state after', state)
  }
}
export const watchLogSagas = [
  watchAndLog(),
  watchAndLogBytake()
]