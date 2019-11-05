// Import dependencies.
import React from 'react';
import ReactDOM from 'react-dom';

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

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'Water Bill', amount: 3450, createdAt: 11500 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 3450, createdAt: 11500 }));
store.dispatch(setTextFilter('water'));



ReactDOM.render(<AppRouter />, document.getElementById('app'));