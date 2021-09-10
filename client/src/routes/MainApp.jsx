import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from 'react-redux'
import MainRoute from './MainRoute'
import store from '../reducers'

const MainApp = () => {
    return (
        <Provider store={store}>
            <Router>
                <MainRoute />
            </Router>
        </Provider>
    )
}

export default MainApp
