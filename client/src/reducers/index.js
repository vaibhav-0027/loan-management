import { applyMiddleware, combineReducers, createStore } from "redux"
import ReduxThunk from "redux-thunk"
import LoanReducer from "./loanReducer";

export const reducers = {
    loans: LoanReducer
}

const app = combineReducers(reducers);

const rootReducer = (state, action) => {
    return app(state, action)
}

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default store