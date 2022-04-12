import { combineReducers } from "redux"
import firstTest from './test/firstTest.slice';
import secondTest from './test/secondTest.slice';

export const rootReducer = combineReducers({
    firstTest,
    secondTest,
});