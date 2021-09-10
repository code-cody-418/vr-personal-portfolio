import React from "react";
import {Button, Modal} from "react-bootstrap";
import "./modalStyles.css"

export const ContactFormModal = ({ show, handleClose, handleShow }) => {
    return (
        <>
            {/*<Button variant="primary" onClick={handleShow}>*/}
            {/*    Launch demo modal*/}
            {/*</Button>*/}

            <Modal show={show} onHide={handleClose} dialogClassName="menu-modal">
                <Modal.Header
                    closeButton
                    className="modal-background">
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body
                    className="modal-background"
                >Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer
                    className="modal-background"
                >
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
