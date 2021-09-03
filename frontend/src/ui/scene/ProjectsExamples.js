import React from "react";
import {useTexture} from "@react-three/drei";
import {useResponsive3d} from "../../customHooks/useResponsive3d";


export const ProjectsExamples = () => {

    //loads textures for the examples
    const alienGramExample = useTexture("/aliengram-example.png")
    // const alienGramExample = useTexture("/saiyanwebdev-example.png")

    const { projectsExampleSize, projectsExampleYPosition, projectsExampleZPosition, projectsExampleYRotation } = useResponsive3d()

    return (
        <>
            <group
                position={[-16, projectsExampleYPosition, projectsExampleZPosition]}
                rotation={[0, projectsExampleYRotation, 0]}
                scale={projectsExampleSize}
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
