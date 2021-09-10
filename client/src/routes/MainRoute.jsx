import React from 'react'
// import { Route } from 'react-router'
// import LoginScreen from '../screens/Login'

import AuthRouteSwitch from './AuthRouteSwitch'
import MainRouteSwitch from './MainRouteSwitch'

const MainRoute = () => {
    return (
        <React.Fragment>
            <AuthRouteSwitch />
            <MainRouteSwitch />
        </React.Fragment>
    )
}

export default MainRoute
