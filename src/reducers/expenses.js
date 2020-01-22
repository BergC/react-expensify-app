// Expenses Reducer
const expensesReducerDefaultState = []

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];

        case 'REMOVE_EXPENSE':
            // Because each expense is an object we can destructure the id off of it.
            return state.filter(({ id }) => id != action.id);

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense, 
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });

        case 'SET_EXPENSES':
            return action.expenses;

        default:
            return state;
    };
};