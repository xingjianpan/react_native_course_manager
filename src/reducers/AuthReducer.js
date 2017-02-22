import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
} from '../actions/types';


const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  loading: false,
  authenticated: false,
};

export default function (state = INITIAL_STATE, action) {
  console.log('action: ', action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
