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

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 450, createdAt: 4500 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 750, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 125000, createdAt: 100 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));