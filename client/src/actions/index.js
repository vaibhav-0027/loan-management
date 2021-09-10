import dash_api from "../helpers/dash_api"
import { ReduxAsyncAction } from "../helpers/action_helper"

export const FetchLoans = new ReduxAsyncAction('FETCH_LOANS')
FetchLoans.registerRequest(async () => {
    return dash_api.get('/fetch-loan').then((data) => data)
})
export const FETCH_LOANS = FetchLoans.constants


export const CreateLoanApplication = new ReduxAsyncAction('CREATE_LOAN_APPLICATION')
CreateLoanApplication.registerRequest(async (body) => {
    return dash_api.post('/create-loan', body).then((data) => data)
})
export const CREATE_LOAN_APPLICATION = CreateLoanApplication.constants