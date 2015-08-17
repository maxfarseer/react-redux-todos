import React, { Component } from 'react';
import TodoApp from './TodoApp';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';

const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

let createStoreWithMiddleware = applyMiddleware(logger)(createStore);



const store = createStoreWithMiddleware(rootReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <TodoApp />}
      </Provider>
    );
  }
}
