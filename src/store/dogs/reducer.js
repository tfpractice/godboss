import { combineReducers } from "redux";

import { DOG_ACTIONS, REQUEST_ACTIONS } from "./constants";

const reqDefault = { status: null, updatedAt: null, message: null };

const request = (state = reqDefault, { type, curry }) =>
  REQUEST_ACTIONS.has(type) ? curry(state) : state;

const data = (state = [], { type, curry }) =>
  DOG_ACTIONS.has(type) ? curry(state) : state;

export default combineReducers({ data, request });
