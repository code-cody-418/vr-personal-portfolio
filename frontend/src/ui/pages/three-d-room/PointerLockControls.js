import React, {useEffect, useRef} from "react"
import {extend, useThree} from "@react-three/fiber"
import { PointerLockControls as PointerLockControlsExt } from "three/examples/jsm/controls/PointerLockControls";

extend ({PointerLockControlsExt})

export const PointerLockControls = () => {
    const {camera, gl} = useThree()
    const controls = useRef()

    useEffect( () => {
        document.addEventListener("click", () => {
            if(controls.current) {
                controls.current.lock()
            }
        })
    }, [controls.current])

    return (
        <pointerLockControlsExt 
            ref={controls}
            args={[camera, gl.domElement]}
        />
    )
    
}