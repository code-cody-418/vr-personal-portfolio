import React, {useEffect, useRef} from "react";

import {PointerLockControls as PointerLockControlsImpl} from "three/examples/jsm/controls/PointerLockControls";
import {extend, useThree} from "@react-three/fiber";

extend({ PointerLockControlsImpl })

export const FPVControls = (props) => {

    const { camera, gl } = useThree()

    const controls = useRef()



    useEffect(() => {
        document.addEventListener('click', () => {
            controls.current.lock()
        })
        // console.log("controls", controls)
    }, [])

    // console.log("gl", gl.domElement)

    return (
        <>
            <pointerLockControlsImpl
            ref={controls}
            args={[camera, gl.domElement]}
            {...props}
            />
        </>
    )
}



