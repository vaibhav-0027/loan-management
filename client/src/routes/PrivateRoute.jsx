import React, { useEffect } from 'react'
import { Route, useHistory } from 'react-router'
import jwt_decode from "jwt-decode";
import { getUserAccessToken } from '../helpers/localStorage';

const PrivateRoute = (props) => {

    const history = useHistory();

    useEffect(() => {
        // Check if the user access token is invalid. If invalid, redirecting to the login screen.
        try {
            const decoded = jwt_decode(getUserAccessToken())
            console.log(decoded)
        } catch (error) {
            history.push("/login")
        }

    }, [history])

    return (
        <Route 
            exact={props.exact}
            path={props.path}
            component={props.component}
        />
    )
}

export default PrivateRoute
