# redux-saga 入门学习
## 1. 初始化环境
1. 项目运行环境
npx create-react-app  reactsaga-new-learn
2. 安装redux
yarn add redux  react-redux
 
3. 安装调试工具
yarn add redux-devtools-extension  -dev

## 2.初始化redux 环境

index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import {Provider} from 'react-redux';
//调试工具
import{composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(
  rootReducer,
  composeWithDevTools()
)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

```
### reducer/index.js
```javascript
import {combineReducers} from 'redux';
import user from './user'
export default combineReducers({
  user,
})
```
### reducer/user.js
```javascript
const users = (state = {}, action = {}) => {
  switch(action.type) {
    default: return state;
  }
}

export default users;
```