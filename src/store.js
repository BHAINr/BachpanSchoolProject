import { createStore, combineReducers } from "redux";
import {thunk} from "redux-thunk";
import { adfFome } from "./reducer/fomeReducer";

const reducer = combineReducers({
    admissionfomedata:adfFome,
});

let initialState = {
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    {...middleware}
);


export default store;