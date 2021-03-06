import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


 class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCcJRuZdnGTfTcEbZQ2lT6Z9ePyjiEzTdw',
      authDomain: 'react-native-manager-8c5d6.firebaseapp.com',
      databaseURL: 'https://react-native-manager-8c5d6.firebaseio.com',
      projectId: 'react-native-manager-8c5d6',
      storageBucket: '',
      messagingSenderId: '739106486133'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
