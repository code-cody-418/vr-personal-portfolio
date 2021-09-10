import React, {useState} from "react";
import {ThreeDScene} from "./scene/ThreeDScene";
import './scene/sceneStyle.css'
import {Col, Container, Row} from "react-bootstrap";
import {ContactFormModal} from "./pop-ups/ContactFormModal";

export const Home = () => {
    return (
        <>

            <Container>
                <Row>
                    <Col className='canvasSize'>
                        <ThreeDScene />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
