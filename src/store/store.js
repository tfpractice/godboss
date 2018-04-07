import thunk from "redux-thunk";
import { applyMiddleware as applyMid, createStore } from "redux";

// import { createLogger } from "redux-logger";

import rootR from "./reducer";

const predicate = () => true;

const collapsed = (getState, action) => action.type;

// const log = createLogger({ collapsed, predicate });

export default state => applyMid(thunk)(createStore)(rootR, state);
