import { combineReducers } from "redux";
import { contactReducer } from "./contactreducer";
export default combineReducers({
    contact:contactReducer,
})