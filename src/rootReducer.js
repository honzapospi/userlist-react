import { combineReducers } from 'redux';
import userReducer from './redux/userReducer';

export default combineReducers({
    users: userReducer
});