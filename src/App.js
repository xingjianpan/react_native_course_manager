import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View } from 'react-native';
import ReduxThunk from 'redux-thunk';
import wilddog from 'wilddog';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


const config = {
  authDomain: 'skyline99.wilddog.com',
};
wilddog.initializeApp(config);

class App extends Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
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
