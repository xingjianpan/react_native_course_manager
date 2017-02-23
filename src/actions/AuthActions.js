import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  BEGIN_AUTH_USER,
  AUTH_ERROR,
  AUTH_USER,
  UNAUTH_USER,
} from './types';


const ROOT_URL = 'http://123.56.168.1:3090';

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

export const authError = (error) => {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
};


export const signupUser = ({ email, password }) => {
  return (dispatch) => {

    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response=> {
        // if request is good
        // - update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - save the JWT token, use localstorage
        // TODO
        // - redirect to the route /feature
        // TODO
      })
      .catch(error => {
        dispatch(authError(error.response.data.error));
      }
        // if request is bad
        // - Show an error to the user
      );
  };
};

export const signinUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: BEGIN_AUTH_USER });
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // console.log(response);
        dispatch({ type: AUTH_USER });
        // - save the JWT token, use localstorage
        // TODO
        // - redirect to the route /feature
        Actions.main();
      })
      .catch((error) => {
        // if request is bad
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  };
};


export const signoutUser = () => {
  // localStorage.removeItem('token')
  return {
    type: UNAUTH_USER,
  };
};
