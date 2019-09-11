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
## 3.redux-saga引入

### 1.安装saga
yarn add redux-saga

To run  Saga, we'll have to connect it to the Redux Store using the redux-saga middleware.
### 2.在index.js中作准备
![image](https://github.com/FanWorldBegin/saga-easy-learn/blob/master/images/1.png)

### 3.saga/index.js 
```javascript
export function* helloSaga() {
  console.log('Hello Saga!');
}
```

### 4.运行saga
![image](https://github.com/FanWorldBegin/saga-easy-learn/blob/master/images/2.png)

## 4.generator
### 1.概念
1. Generator 函数是 ES6 提供的一种异步编程解决方案
2. 但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。
3. Generator 函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。不同的是，调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象.
4. 下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield表达式（或return语句）为止。

### 2. 运行generator
![image](https://github.com/FanWorldBegin/saga-easy-learn/blob/master/images/.png)