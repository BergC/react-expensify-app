import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should setup default filter values', () => {
    // @@INIT is the initial action object that REDUX dispatches even though we don't explicitly dispatch it.
    const state = filtersReducer(undefined, { type: '@@INIT'});
    
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sortBy equal to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });

    expect(state.sortBy).toBe('amount');
});

test('Should set sortBy value to date', () => {
    // Because default state has sortBy set to date, we created a state with sortBy set to amount to test.
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };

    const action = { type: 'SORT_BY_DATE' };

    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
    const text = 'be';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };

    const state = filtersReducer(undefined, action);

    expect(state.text).toBe('be');
});

test('Should set startDate filter', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    };

    const state = filtersReducer(undefined, action);

    // Moment instances are objects, so need to use toEqual
    expect(state.startDate).toEqual(startDate);
});

test('Should set startDate filter', () => {
    const endDate = moment().endOf('month');
    const action = {
        type: 'SET_END_DATE',
        endDate
    };

    const state = filtersReducer(undefined, action);

    // Moment instances are objects, so need to use toEqual
    expect(state.endDate).toEqual(endDate);
});