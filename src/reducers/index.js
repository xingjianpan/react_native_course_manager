import { combineReducers } from 'redux';
import authReducer from './auth_reducer';

export default combineReducers({
  banana: () => [],
  auth: authReducer,
});
