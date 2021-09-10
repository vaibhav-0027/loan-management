import { reducerWrapper } from "../helpers/action_helper"
import { FETCH_LOANS, CREATE_LOAN_APPLICATION } from "../actions"

export const INIT_STATE = {
    data: []
}

const Handler = (state, action) => {
    let { data } = action
    data = data?.data

    switch(action.type) {
        case FETCH_LOANS.response:
            return Object.assign({}, state, { data })

        case CREATE_LOAN_APPLICATION.response:
            const updatedLoans = state.data.concat(data)
            return Object.assign({}, state, { data: updatedLoans })

        default:
            return state
    }
}

const LoanReducer = reducerWrapper(INIT_STATE, Handler, {
    request: [
        FETCH_LOANS,
        CREATE_LOAN_APPLICATION,
    ]
})

export default LoanReducer