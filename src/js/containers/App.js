import React, { Component } from 'react';
import TodoApp from './TodoApp';
import { createRedux, createDispatcher, composeStores } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../stores';

function loggerMiddleware (next) {
  return action => {
    console.log(action)
    next(action)
  }
}

const dispatcher = createDispatcher(
  composeStores(stores),
  getState => [ loggerMiddleware ]
)

const redux = createRedux(dispatcher)

export default class App extends Component {
  render() {
    return (
      <Provider redux={redux}>
        {() => <TodoApp />}
      </Provider>
    );
  }
}
