import React, { useEffect } from 'react'
import { signInWithPopup } from '@firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

import { auth, provider } from "../../helpers/firebase"
import { getUserAccessToken, getUserInfo, setUserAccessToken, setUserInfo } from '../../helpers/localStorage';
import { useHistory } from 'react-router';
import jwt_decode from "jwt-decode";

const LoginScreen = () => {

    const history = useHistory();

    useEffect(() => {

        // We fetch the access token from local storage (if exist), and check if the token is valid.
        // If token is valid, user redirected to the home page.
        try {
            const decoded = jwt_decode(getUserAccessToken())
            
            if(decoded.email === getUserInfo().email) {
                history.push("/home")
            }

        } catch (error) {
            console.log(error)
        }

    }, [history]);

    const signInHandler = () => {

        // Method provided by firebase to sign in user using google auth.
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // The signed-in user info.
                const user = result.user;
                const token = user.stsTokenManager.accessToken;

                // Storing logged in user information for further use.
                setUserInfo(JSON.stringify(user))
                setUserAccessToken(token)
                history.push("/home")

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);

                console.log(errorCode, errorMessage, email, credential);

                alert(`Something went wrong! Please try again! ${errorMessage}`)
            });

    }

    return (
        <div style={{height: "100vh", width: "100vw"}}>
            <div 
                className="h-100 w-100 d-flex justify-content-center align-items-center" 
                style={{cursor: 'pointer'}}
                onClick={signInHandler}
            >
                Continue with Google
            </div>
        </div>
    )
}

export default LoginScreen
