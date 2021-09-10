import { createSelector } from "reselect"
import { INIT_STATE } from "../reducers/loanReducer"

export const getState = (state) => {
    return state || INIT_STATE
}

// This method selects the loans from the redux store.
export const selectLoans = createSelector(
    getState,
    loanReducer => {
        return loanReducer.loans.data || []
    }
)