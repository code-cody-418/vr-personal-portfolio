import React, {useState} from "react";
import {ThreeDScene} from "./scene/ThreeDScene";
import './scene/sceneStyle.css'
import {Col, Container, Row} from "react-bootstrap";
import {InfoModal} from "./scene/InfoModal";

export const Home = () => {
    //to open and close the information modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <InfoModal show={show} handleClose={handleClose} handleShow={handleShow}/>
            <Container>
                <Row>
                    <Col className='canvasSize'>
                        <ThreeDScene handleClose={handleClose} handleShow={handleShow}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
