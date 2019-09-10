import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import {Provider} from 'react-redux';
//调试工具
import{composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware) //安装中间件
  )
)
sagaMiddleware.run(rootSaga)
ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));


