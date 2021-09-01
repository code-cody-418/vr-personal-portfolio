import React, {useMemo, useRef} from "react";
import * as THREE from "three"
import {useLoader} from "@react-three/fiber";


export const ProjectsTitleText = () => {
    const FontConfig = ({text, position, rotation}) => {
        const font = useLoader(THREE.FontLoader, "/Saiyan-Sans-Regular.json");
        const config = useMemo(
            () => ({
                font: font,
                size: 5,
                height: 0.2,
                curveSegments: 32,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }),
            [font]
        );
        const mesh = useRef();
        return (
            <>
                <group position={position} rotation={rotation}>
                    <mesh ref={mesh}>
                        <textGeometry args={[text, config]}/>
                        <meshStandardMaterial color={"#ff0000"}/>
                    </mesh>
                </group>
            </>
        )
    }

    const TitleText = () => {
        return (
            <>
                <group
                >
                    <FontConfig
                        text="Projects"
                        position={[-20, 7, 10]}
                        rotation={[0, 1.570796, 0]}
                    />
                </group>
            </>
        )
    }

    return (
        <>
            <TitleText/>
        </>
    )
}
