import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAIL,
  AUTH_ERROR,
} from '../actions/types';


const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  loading: false,
  user: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case SIGNIN_USER:
      return { ...state, loading: true, error: '' };
    case SIGNIN_USER_SUCCESS:
      return { ...state, user: action.payload, error: '', loading: false };
    case SIGNIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed', password: '', loading: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
