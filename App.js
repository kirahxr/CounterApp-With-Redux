/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import CounterApp from './src/CounterApp';

const initialState = {
  counter: 0
}

const reducer = (state=initialState,action) => {
  switch(action.type) {
    case 'PLUS_COUNTER':
      return { counter : state.counter + 1 }
    case 'MIN_COUNTER':
      return { counter : state.counter - 1 }
    case 'RESET_COUNTER':
      return { counter : state.counter = 0 }
  }
  return state
}

const store = createStore(reducer)

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}