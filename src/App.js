import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import RouterComponent from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAIQj0RcWM_8ejWXdSJ0cRjShi1zMItLSo',
            authDomain: 'manager-41e20.firebaseapp.com',
            databaseURL: 'https://manager-41e20.firebaseio.com',
            projectId: 'manager-41e20',
            storageBucket: 'manager-41e20.appspot.com',
            messagingSenderId: '141411159770'
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <RouterComponent />
            </Provider>
        );
    }  
}

export default App;
