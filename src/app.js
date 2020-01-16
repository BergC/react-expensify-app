// Import dependencies.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import app.
import AppRouter from './routers/AppRouter';

// Import store.
import configureStore from './store/configureStore';

// Import actions.
import { addExpense } from './actions/expenses';

// Import filters.
import { setTextFilter } from './actions/filters';

// Import selectors.
import getVisibleExpenses from './selectors/expenses';

// Normalize.css import for CSS reset to all browsers.
import 'normalize.css/normalize.css';

// Import our styles file.
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

// Firbase connection.
import './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));