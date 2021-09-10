import React from 'react'
import { Card, Col, Row } from 'reactstrap'

const LoanCard = (props) => {

    const { info } = props
    var date = new Date(info.startDate)

    const cardClickHandler = () => {
        props.setModalInfo(info)
        return props.toggleModal()
    }

    return (
        <Col lg={4} className="my-2">
            <Card style={{cursor: "pointer"}} onClick={cardClickHandler}>
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
            </Card>
        </Col>
    )
}

export default LoanCard
