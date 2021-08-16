import React from "react";
import {ThreeDScene} from "./scene/ThreeDScene";
import './scene/sceneStyle.css'

export const Home = () => {
    return (
        <>
            <div className='canvasSize'>
            <ThreeDScene />
            </div>
        </>
    )
}
