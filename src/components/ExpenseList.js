import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.map((expense, index) => (
                <ExpenseListItem
                    key={expense.id}
                    {...expense}
                />
            ))
        }
    </div>
);

// We call our selector function here to connect our REACT app with the filtered and selected expenses.
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);