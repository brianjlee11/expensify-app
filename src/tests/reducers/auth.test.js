import authReducer from '../../reducers/auth';

test('should login with login action', () => {
  const action = {
    type: 'LOGIN',
    uid: '3rjf9344j56d'
  }
  const state = authReducer({}, action);
  expect(state.uid).toEqual(action.uid);
});

test("should logout with logout action", () => {
  const action = {
    type: "LOGOUT",
  };
  const state = authReducer({ uid: 'anything'}, action);
  expect(state).toEqual({ });
});
