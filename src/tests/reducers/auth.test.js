import authReducer from '../../reducers/auth';

test('Should set uid for login', () => {
    const state = authReducer(undefined, { type: 'LOGIN', uid: 'abc123' });

    expect(state).toEqual({ uid: 'abc123' });
});

test('Should clear uid for logout', () => {
    const state = authReducer(undefined, { type: 'LOGOUT' });

    expect(state).toEqual({});
});