import React from "react";
import {Canvas} from "@react-three/fiber";
import {Physics} from "@react-three/cannon";
import {OrbitControls, Sky} from "@react-three/drei";
import {CubeTest} from "./CubeTest";

export const Test = () => {
    return(
        <>
            <Canvas>

                <Sky sunPosition={[100, 20, 100]} />

                <OrbitControls />

                <Physics>

<CubeTest />

                </Physics>



            </Canvas>
        </>
    )
}
