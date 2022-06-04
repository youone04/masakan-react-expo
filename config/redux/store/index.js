import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducerAdmin } from "../reducers/ResepReducer";
import { reducerResepDetail } from "../reducers/ResepDetailReducer";

const reducer = combineReducers({
  reseps: reducerAdmin,
  resepDetail : reducerResepDetail
});

export const store = createStore(reducer, applyMiddleware(thunk))