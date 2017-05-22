import reducer from '../../app/reducers/user-reducer';
import expect from 'expect';

describe('User reducer tests', () => {
  it('should return the initial state', () => {

    expect(reducer(undefined, {})).toEqual({})
  })

  it('Creates a user when action type is CREATE_USER', () => {
    const action = {
      type: 'CREATE_USER',
      users: {
        name: 'Jack',
        email: 'jack@jack.com',
        password: 'password',
      },
    };

    const expected = {
      email: 'jack@jack.com',
      name: 'Jack',
      password: 'password',
    }


    expect(reducer(undefined, action)).toEqual(expected);
  })

  it('Logins a user when action type is LOGIN', () => {
    const action = {
      type: 'LOGIN',
      users: {
        email: 'adam@adam.com',
        password: 'password',
      },
    };

    const expected = {
      email: 'adam@adam.com',
      password: 'password',
    }


    expect(reducer(undefined, action)).toEqual(expected);
  })

  it('Logs out a user when action type is LOGOUT', () => {
    const action = {
      type: 'LOGOUT',
      users: {
        email: 'breana@breana.com',
        password: 'password',
      },
    };

    expect(reducer(undefined, action)).toEqual({});
  })
})
