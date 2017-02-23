import   wilddog from 'wilddog';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAIL,
  AUTH_ERROR,
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}

export const signinUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: SIGNIN_USER });
    wilddog.auth().signInWithEmailAndPassword(email, password)
      .then(user => signinUserSuccess(dispatch, user))
      .catch(() => {
        wilddog.auth().createUserWithEmailAndPassword(email, password)
          .then(user => signinUserSuccess(dispatch, user))
          .catch(() => signinUserFail(dispatch));
      });
  };
};

const signinUserFail = (dispatch) => {
  dispatch({ type: SIGNIN_USER_FAIL });
};

const signinUserSuccess = (dispatch, user) => {
  dispatch({
    type: SIGNIN_USER_SUCCESS,
    payload: user,
  });
};
