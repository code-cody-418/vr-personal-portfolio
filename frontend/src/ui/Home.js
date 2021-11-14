import React, {useEffect, useState} from "react";
import {ThreeDScene} from "./scene/ThreeDScene";
import './scene/sceneStyle.css'
import {Container, Row} from "react-bootstrap";


//if xr is NOT on load css to hide xr button
const xr = navigator.xr;

if (xr === undefined || null) {
    import ('../ui/scene/customVRButtonSettings.css')
}


// console.log("is xr on?", xr)

export const Home = () => {

    const [hide3DScene, setHide3DScene] = useState(0)
    const [hideLoadScene, setHideLoadScreen] = useState(false)

    const [descriptionState, setDescriptionState] = useState("")


    //Functionality to 10 second timer
    const [thirtySeconds, setThirtySeconds] = useState(4)
    const [timerOnOff, setTimerOnOff] = useState(true)

    useEffect(() => {
        if (timerOnOff === true) {
            const intervalId = setInterval(() => {
                setThirtySeconds(thirtySeconds => thirtySeconds - 1)
            }, 1000)
            console.log("seconds", thirtySeconds)
            return () => clearInterval(intervalId)
        }
    }, [thirtySeconds, timerOnOff])

    useEffect(() => {
        if (timerOnOff === true) {
            if (thirtySeconds === 4) {
                setDescriptionState("Welcome to My 3D Portfolio ")
            } else if (thirtySeconds === 2) {
                setDescriptionState("Viewable on VR, Desktop, and Mobile")
            } else if (thirtySeconds === 0) {
                setDescriptionState("")
                setTimerOnOff(false)
                setHideLoadScreen(true)
                setHide3DScene(100)
            }
        }
    }, [thirtySeconds])

    return (
        <>
            <Container fluid hidden={hideLoadScene} className="background-image">
                <Row hidden={hideLoadScene}>
                    <h1 hidden={hideLoadScene}>{descriptionState}</h1>
                </Row>
            </Container>
            <ThreeDScene style={{opacity: hide3DScene}} />
        </>
    )
}
