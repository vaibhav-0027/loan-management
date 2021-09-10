import React from 'react'
import { Modal, Row } from 'reactstrap'

const DetailModal = (props) => {

    const { isOpen, toggle, info } = props
    var date = new Date(info.startDate)

    return (
        <div className="">
            <Modal isOpen={isOpen} toggle={toggle} className="p-5" >
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

                <Row>
                    <span>
                        <strong>Address: </strong>
                        {info.address}
                    </span>
                </Row>

                <Row>
                    <span>
                        <strong>Email: </strong>
                        {info.email}
                    </span>
                </Row>
            </Modal>
        </div>
    )
}

export default DetailModal
