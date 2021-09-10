import React, { useEffect, useState } from 'react'
import { Button, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap"
import { getUserInfo } from '../../helpers/localStorage'
import { useHistory } from 'react-router'
import validator from "validator"
import { connect } from 'react-redux'
import { CreateLoanApplication } from '../../actions'

const ApplyLoanScreen = (props) => {

    const userInfo = getUserInfo()
    const history = useHistory()

    const [info, setInfo] = useState({
        name: userInfo.displayName,
        address: "",
        contact: "",
        email: userInfo.email,
        amount: "",
        startDate: null,
        endDate: null,
        emi: 0,
    })

    // This stores if form element has been clicked even once. This helps in showing the
    // error message in case the entered value is invalid.
    const [isTouched, setIsTouched] = useState({
        name: false,
        address: false,
        contact: false,
        email: false,
        amoutn: false,
        startDate: false,
        endDate: false,
    })

    // The value of EMI is not calculated correctly. A default value is given instead.
    useEffect(() => {
        if(!info.startDate || !info.endDate || info.amount < 100000) {
            return setInfo({
                ...info,
                emi: 0,
            })
        }

        setInfo({
            ...info,
            emi: 1000
        })
    }, [info.startDate, info.endDate, info.amount])

    const formClickHandler = (e) => {
        setIsTouched({
            ...isTouched,
            [e.target.name]: true,
        })
    }

    const formChangeHandler = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value,
        }) 
    }

    const invalidExist = () => {
        if(info.name.trim().length === 0 || info.address.trim().length === 0)
            return true

        if(info.contact.length !== 10 || !validator.isEmail(info.email)) 
            return true

        if(info.amount < 100000 || !info.startDate || !info.endDate || !info.emi)
            return true

        return false
    }

    const submitHandler = (e) => {
        e.preventDefault();
        
        if(invalidExist()) {
            return alert("Fill valid values")
        }

        props.CreateLoanApplication(info)
        alert("Loan applied successfully")
        history.push('/home')
    }

    const _renderBackButton = () => {
        return (
            <div className="d-flex justify-content-start w-100">
                <Button 
                    onClick={() => history.push("/home")}
                    style={{width: "5%", marginLeft: "10px"}}
                    className="mt-3"
                >
                    Back
                </Button>
            </div>
        )
    }

    var today = new Date()
    var dd = today.getDate()
    var mm = today.getMonth() + 1
    var yyyy = today.getFullYear()

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    } 
        
    today = yyyy + '-' + mm + '-' + dd

    return (
        <div className="d-flex flex-column h-100 w-100 align-items-center justify-content-center">
            {_renderBackButton()}

            <div className="d-flex align-items-center justify-content-center w-100">
                <h1><strong>Loan Application</strong></h1>
            </div>

            <div>
                <h3>EMI: {info.emi ? `Rs ${info.emi}` : "N/A"}</h3>
            </div>

            <Form className="w-100 mt-4" onSubmit={submitHandler} style={{marginLeft: "50px"}} >
                <FormGroup>
                    <Label>Applicant Name</Label>
                    <Input 
                        name="name" 
                        className="w-25" 
                        value={info.name} 
                        onChange={formChangeHandler} 
                        onClick={formClickHandler}
                        invalid={isTouched.name && info.name.trim().length === 0}    
                    />
                    <FormFeedback invalid>
                        Name cannot be empty
                    </FormFeedback>
                </FormGroup>

                <FormGroup className="mt-3">
                    <Label>Address</Label>
                    <Input 
                        name="address" 
                        className="w-50" 
                        value={info.address} 
                        onChange={formChangeHandler} 
                        onClick={formClickHandler}
                        invalid={isTouched.address && info.address.trim().length === 0}
                    />
                    <FormFeedback invalid>
                        Address cannot be empty
                    </FormFeedback>
                </FormGroup>

                <FormGroup className="mt-3">
                    <Label>Mobile</Label>
                    <Input 
                        name="contact" 
                        className="w-25" 
                        value={info.contact} 
                        type="number" 
                        onChange={formChangeHandler} 
                        onClick={formClickHandler}
                        invalid={isTouched.contact && info.contact.length !== 10}
                    />
                    <FormFeedback invalid>
                        Invalid mobile number
                    </FormFeedback>
                </FormGroup>

                <FormGroup className="mt-3">
                    <Label>Email</Label>
                    <Input 
                        name="email" 
                        className="w-50" 
                        value={info.email} 
                        onChange={formChangeHandler} 
                        onClick={formClickHandler}
                        invalid={isTouched.email && !validator.isEmail(info.email)}    
                    />
                    <FormFeedback invalid>
                        Invalid Email Address
                    </FormFeedback>
                </FormGroup>

                <FormGroup className="mt-3">
                    <Label>Amount</Label>
                    <Input 
                        name="amount" 
                        className="w-25" 
                        value={info.amount} 
                        type="number" 
                        onChange={formChangeHandler} 
                        onClick={formClickHandler}
                        invalid={isTouched.amount && info.amount < 100000}
                    />
                    <FormFeedback invalid>
                        Minimum amount is 100000
                    </FormFeedback>
                </FormGroup>

                <FormGroup className="mt-3">
                    <Label>Start Date</Label>
                    <Input 
                        name="startDate" 
                        className="w-25" 
                        value={info.startDate} 
                        type="date" 
                        min={today}
                        onChange={formChangeHandler} 
                    />
                </FormGroup>

                {
                    info.startDate ? 
                        <FormGroup className="mt-3">
                            <Label>End Date</Label>
                            <Input 
                                name="endDate" 
                                className="w-25" 
                                value={info.endDate} 
                                type="date" 
                                onChange={formChangeHandler}
                                min={info.startDate} 
                            />
                        </FormGroup>
                        :
                        null
                }

                <Button className="mt-5" type="submit">
                    Apply
                </Button>
            </Form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    CreateLoanApplication: (body) => dispatch(CreateLoanApplication.request(body))
})

export default connect(null, mapDispatchToProps)(ApplyLoanScreen)
