import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { Button, Card } from 'reactstrap';
import { FetchLoans } from '../../actions';
import { setUserAccessToken, setUserInfo } from '../../helpers/localStorage';

const HomeScreen = (props) => {

    const history = useHistory()

    useEffect(() => {
        props.FetchLoans()
        // eslint-disable-next-line
    }, [])

    const applyClickHandler = () => {
        return history.push("/apply")
    }

    const viewClickHandler = () => {
        return history.push("/view")
    }

    // TO handle logout, method removes the user info and access token from local storage.
    const logoutHandler = () => {
        setUserInfo("")
        setUserAccessToken("")
        return history.push("/login")
    }

    return (
        <div
            style={{height: "100vh", width: "100vw"}} 
        >
            <div className="w-100 d-flex flex-row align-items-right justify-content-end mr-5">
                <Button onClick={logoutHandler} className="mr-5 mt-3" style={{marginRight: "12px"}}>
                    Logout
                </Button>
            </div>
            <div className="h-75 w-100 d-flex flex-row justify-content-around align-items-center">
                    <Card 
                        className="w-25 d-flex h-50 justify-content-center align-items-center" 
                        style={{cursor: "pointer", borderRadius: "8px", background: "#d1e0d5"}} 
                        onClick={applyClickHandler}
                    >
                        APPLY FOR LOAN
                    </Card>

                    <Card 
                        className="w-25 d-flex h-50 justify-content-center align-items-center" 
                        style={{cursor: "pointer", borderRadius: "8px", background: "#d1e0d5"}} 
                        onClick={viewClickHandler}
                    >
                        VIEW PREVIOUS LOANS
                    </Card>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    FetchLoans: () => dispatch(FetchLoans.request())
})

export default connect(null, mapDispatchToProps)(HomeScreen)
