import {login, logout} from '../../actions/auth';

test('should generate login action object', () => {
  const action = login('31nn43ddsg4fv');
  expect(action).toEqual({ type: "LOGIN", uid: "31nn43ddsg4fv" });
});

test("should generate logout action object", () => {
  const action = login();
  expect(action).toEqual({ type: "LOGIN"});
});
