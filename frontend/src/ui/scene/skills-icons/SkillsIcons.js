import React, {useEffect, useState} from "react";
import {Box, useTexture} from "@react-three/drei";

export const SkillsIcons = ({thirtySeconds, iconState}) => {

    const reactIcon = useTexture("/react-icon.png")
    const expressIcon = useTexture("/express-icon.png")
    const reduxIcon = useTexture("/redux-icon.png")

    const [currentIcon, setCurrentIcon] = useState(reactIcon)

    useEffect( () => {
        if (iconState === "reactActive") {
            setCurrentIcon(reactIcon)
        } else if (iconState === "expressActive") {
            setCurrentIcon(expressIcon)
        } else if (iconState === "reduxActive") {
            setCurrentIcon(reduxIcon)
        }
        console.log("icon state", iconState)
    }, [iconState])

    // useEffect( () => {
    //     const changeIcon = () => {
    //         if (thirtySeconds > 21) {
    //             setCurrentIcon(reactIcon)
    //         } else if ( thirtySeconds < 20) {
    //             setCurrentIcon(reduxIcon)
    //         }
    //     }
    //     return changeIcon
    // }, [thirtySeconds])


    return (
        <>
            <group
                position={[ 20, 0, 20 ]}
                rotation={[0, -1.570796, 0]}
                scale={10}
            >
                <mesh>
                    <planeGeometry/>
                    <meshStandardMaterial
                        transparent={true}
                        map={currentIcon}
                    />
                </mesh>
            </group>
        </>
    )
}
