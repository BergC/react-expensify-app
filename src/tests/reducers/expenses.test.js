import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
});

test('Should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ]);
});

test('Shouldn\'t remove expenses if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Dinner',
        note: '',
        amount: 8500,
        createdAt: 0
    };
    
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, action.expense]);
});

test('Should edit an expense by ID', () => {
    const description = 'Bum';
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state[0].description).toBe(description);
});

test('Shouldn\'t edit expense if ID not found', () => {
    const description = 'Bum';
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description
        }
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});