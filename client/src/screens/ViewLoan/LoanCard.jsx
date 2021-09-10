import React from 'react'
import { Button, Card, Col, Row } from 'reactstrap'

const LoanCard = (props) => {

    const { info } = props
    var date = new Date(info.startDate)

    const cardClickHandler = () => {
        props.setModalInfo(info)
        return props.toggleModal()
    }

    return (
        <Col lg={4} className="my-2">
            <Card style={{border: "2px solid black", paddingLeft: "10px"}} >
                <Row>
                    <span>
                        <strong>Applicant: </strong>
                        {info.name}
                    </span>
                </Row>

                <Row>
                    <span>
                        <strong>Amount: </strong>
                        Rs {info.amount}
                    </span>
                </Row>

                <Row>
                    <span>
                        <strong>EMI: </strong>
                        Rs {info?.emi}
                    </span>
                </Row>

                <Row>
                    <span>
                        <strong>Date Applied: </strong>
                        {date.getDate()}
                        /{date.getMonth() + 1}
                        /{date.getFullYear()}
                    </span>
                </Row>

                <Row className="d-flex align-items-center justify-content-center">
                    <Button style={{cursor: "pointer", width: "100px"}} onClick={cardClickHandler}>
                        See More
                    </Button>
                </Row>
            </Card>
        </Col>
    )
}

export default LoanCard
