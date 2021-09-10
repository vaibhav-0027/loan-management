import React from 'react'
import { Switch, Route } from "react-router"
import LoginScreen from '../screens/Login'

const AuthRouteSwitch = () => {
    return (
        <Switch>
            <Route exact path="/login">
                <LoginScreen />
            </Route>
        </Switch>
    )
}

export default AuthRouteSwitch
