import { Modal, Button } from 'react-bootstrap';

/* eslint-disable react/prop-types */
function ModalAnalyze({ show, onHide, data }) {
    window.scrollTo(0, 0)

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Result</Modal.Title>
            </Modal.Header>
            <Modal.Body><p>For the position: <b>{data.position}</b> the average price of a player is: <b>250000€</b>, with a maximum of <b>340000€</b> and minimum of <b>85000€</b>.</p>
                <p>For your inputed price of <b>{data.price}€</b> the players that fit the most with your inputed data are:</p>
                <div className='modalAnalyzePlayerList'>
                    <ul>
                        <li>Player with id: <b>3468</b></li>
                        <li>Player with id: <b>422</b></li>
                        <li>Player with id: <b>7003</b></li>
                    </ul>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalAnalyze;