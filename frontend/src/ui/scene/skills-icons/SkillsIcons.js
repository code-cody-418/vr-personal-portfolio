import React from "react";
import {Box, useTexture} from "@react-three/drei";

export const SkillsIcons = () => {

    const reactIcon = useTexture("/react-icon.png")
    const reduxIcon = useTexture("/redux-icon.png")



    return (
        <>
            <group
                position={[ 20, 0, 7 ]}
                rotation={[0, -1.570796, 0]}
                scale={10}
            >
                <mesh>
                    <planeGeometry/>
                    <meshStandardMaterial
                        transparent={true}
                        map={reduxIcon}
                    />
                </mesh>
            </group>
        </>
    )
}
