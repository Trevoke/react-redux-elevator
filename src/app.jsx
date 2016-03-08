import styles from './app.css';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';
import App from './new-app';

const store = new Store({
  log: []
});

class Root extends Component {
  // Provider can only wrap a single element.
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

if (process.env.NODE_ENV !== 'test')
  render(<Root />, document.getElementById('main'));
