import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  BEGIN_AUTH_USER,
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
    case BEGIN_AUTH_USER:
      return { ...state, loading: true, error: '' };
    case AUTH_USER:
      return { ...state, error: '', authenticated: true, loading: false };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
