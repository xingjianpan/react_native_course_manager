import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleWare } from 'redux';
import { View } from 'react-native';
import ReduxThunk from 'redux-thunk';
import * as wilddog from 'wilddog';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      authDomain: 'skyline99.wilddog.com',
    };
    wilddog.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleWare(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
