import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Row } from 'reactstrap'
import {connect} from 'react-redux';
import { selectLoans } from '../../selectors';
import LoanCard from './LoanCard';
import DetailModal from './DetailModal';
import { FetchLoans } from '../../actions';

const ViewLoanScreen = (props) => {

    const history = useHistory()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalInfo, setModalInfo] = useState({})

    // Toggle method for the modal.
    const toggle = () => {
        setIsModalOpen(!isModalOpen)
    }

    // Fetching the loans in case the loans array is empty. Could be helpful
    // in cases when the view page is directly opened.
    useEffect(() => {
        if(props.loans.length === 0) {
            return props.fetchLoans()
        }
        // eslint-disable-next-line
    }, [])

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

    return (
        <div className="d-flex flex-column h-100 w-100">
            { _renderBackButton() }

            {/* Show some message in case there is no result to be showed to user. */}
            {
                props.loans.length === 0 ? 
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        NO PREVIOUS RECORD FOUND
                    </div>
                    :
                    null
            }

            <DetailModal
                isOpen={isModalOpen}
                toggle={toggle}
                info={modalInfo}
            />

            <Row className="mt-4 mx-3">
                {
                    props.loans.map((_current, idx) => {
                        return <LoanCard 
                                info={_current} 
                                key={idx} 
                                toggleModal={toggle}
                                setModalInfo={setModalInfo}
                               />
                    })
                }
            </Row>
        </div>
    )
}

const mapStateToProps = (state) => ({
    loans: selectLoans(state),
})

const mapDispatchToProps = (dispatch) => ({
    fetchLoans: () => dispatch(FetchLoans.request())
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewLoanScreen)
