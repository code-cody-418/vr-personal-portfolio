import React, {useMemo, useRef} from "react";
import * as THREE from "three"
import {useLoader} from "@react-three/fiber";
import Kakashi from "../Kakashi";


export const ProjectsListText = () => {
    const FontConfig = ({text, position, rotation}) => {
        const font = useLoader(THREE.FontLoader, "/Roboto-Slab-Bold.json");
        const config = useMemo(
            () => ({
                font: font,
                size: 1.5,
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
                        <meshStandardMaterial color={"#8f6bd9"}/>
                    </mesh>
                </group>
            </>
        )
    }
    const ListText = () => {
        return (
            <>
                <FontConfig
                    text="Exp Ninja"
                    position={[-20, 4, 10]}
                    rotation={[0, 1.570796, 0]}
                />
                <Kakashi
                    position={[-19, 4, -2]}
                    rotation={[0, 1.570796, 0]}
                />
            </>
        )
    }
    return (
        <>
            <ListText />
        </>
    )
}
