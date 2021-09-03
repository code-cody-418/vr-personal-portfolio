import React from "react";
import {useTexture} from "@react-three/drei";


export const ProjectsExamples = () => {

    //loads textures for the examples
    const alienGramExample = useTexture("/aliengram-example.png")
    // const alienGramExample = useTexture("/saiyanwebdev-example.png")


    return (
        <>
            <group
                position={[-16, 0, 18]}
                rotation={[0, 2.3, 0]}
                scale={14}
            >
                <mesh>
                    <planeGeometry/>
                    <meshStandardMaterial
                        transparent={true}
                        // opacity={0.5}
                        map={alienGramExample}
                    />
                </mesh>
            </group>
        </>
    )
}
