import { combineReducers } from 'redux';
import studentReducer from './studentReducer';
import subjectReducer from './subjectReducer';

export default combineReducers({
  studentReducer,
  subjectReducer
});
