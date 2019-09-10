
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {increment, incrementAsync} from './actions/counter'
import createSagaMiddleware from 'redux-saga';
import {get_user} from './actions/user'

// create the saga middleware
class App extends Component {
  render() {
    const { isFetching, error, user} = this.props.user;
    let data;
    if(error) {
      data = error.message;
    } else if(isFetching) {
      data = 'Loading....'
    } else {
      data = user && user.data[0].name;
    }
    return (
      <div className="App">
        <h3>点击同步加1</h3>
        <p>{this.props.counter}</p>
        <button onClick={this.props.increment}>同步+1</button>

        <h3>点击异步加1</h3>
        <p>{this.props.counter}</p>
        <button onClick={this.props.incrementAsync}>异步+1</button>

        <h3>saga异步请求数据</h3>
        <p>{this.props.counter}</p>
        <button onClick={this.props.get_user}>SagaRequest</button>        
        <h1>{data}</h1>
      </div>
    );
  }
}

//在reducer 中创建counter 的reducer
const mapStateToProps = (state) => {
  console.log(state)
  return {
    counter: state.counter,
    user: state.user,
  }
}
export default connect(mapStateToProps, {increment, incrementAsync, get_user})(App);
