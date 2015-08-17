import React, { Component } from 'react';
import { Redirect, Router, Route } from 'react-router'
import TodoApp from './TodoApp';
import About from '../components/About';
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

function requireLogin() {
  console.log('login require');
}

export default class App extends Component {
  render() {
    const { history } = this.props
    return (
      <Provider store={store}>
        {() =>
          <Router history={this.props.history} >
            <Route path="/" component={TodoApp}>
              <Route path="about" component={About} onEnter={requireLogin(store)}/>
            </Route>
          </Router>
        }
      </Provider>
    );
  }
}
