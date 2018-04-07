import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// import { reducer as dogs } from "./dogs";

const basic = (state = [], action) => state;

export default combineReducers({ form });
