import React from 'react'
import { Switch } from 'react-router'
import ApplyLoanScreen from '../screens/ApplyLoan'
import HomeScreen from '../screens/Home'
import ViewLoanScreen from '../screens/ViewLoan'
import PrivateRoute from './PrivateRoute'

const MainRouteSwitch = (props) => {
    return (
        <Switch>
            <PrivateRoute 
                exact
                path="/"
                component={HomeScreen}
            />

            <PrivateRoute 
                exact
                path="/home"
                component={HomeScreen}
            />

            <PrivateRoute 
                exact
                path="/apply"
                component={ApplyLoanScreen}
            />

            <PrivateRoute 
                exact
                path="/view"
                component={ViewLoanScreen}
            />
        </Switch>
    )
}

export default MainRouteSwitch
