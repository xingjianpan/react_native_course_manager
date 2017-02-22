import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
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
    default:
      return state;
  }
}
