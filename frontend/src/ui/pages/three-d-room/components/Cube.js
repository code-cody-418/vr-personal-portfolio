import React, {useEffect, useRef} from "react";

import {useFrame} from "@react-three/fiber";
import {useBox} from "@react-three/cannon";
import {Box} from "@react-three/drei";


export const Cube = (props) => {

    const [ref, api] = useBox(() => ({
        mass: 1,
        velocity: [0, 0, 0],
        position: [0, 0, 0]
    }))


    return (
        <>
            <Box ref={ref}>
                <meshNormalMaterial />
            </Box>
        </>
    )
}
