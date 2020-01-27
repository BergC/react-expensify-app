// Import dependencies.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import app.
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

// Normalize.css import for CSS reset to all browsers.
import 'normalize.css/normalize.css';

// Import our styles file.
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

// Firbase connection.
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        renderApp();  
        history.push('/');
    }
});