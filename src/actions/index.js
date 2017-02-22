import axios from 'axios';
import * as wilddog from 'wilddog';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  AUTH_USER,
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


export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    wilddog.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({ type: AUTH_USER, payload: user });
      })
      .catch((error) => {
        dispatch(authError('Login Failed.'));
      });
  };
};

