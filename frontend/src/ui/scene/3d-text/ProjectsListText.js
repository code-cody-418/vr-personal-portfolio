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
                size: 2.5,
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
                <group
                    position={[0, 0, 0]}
                >
                    <group onClick={() => window.open("https://expninja.com/")}>
                        <FontConfig
                            text="Exp Ninja"
                            position={[-20, 2, 10]}
                            rotation={[0, 1.570796, 0]}
                        />
                    </group>
                    <Kakashi
                        position={[-19, -8, 18]}
                        rotation={[0, 1.570796, 0]}
                    />

                    <FontConfig
                        text="AlienGram"
                        position={[-20, -2, 10]}
                        rotation={[0, 1.570796, 0]}
                    />
                    <FontConfig
                        text="Saiyan Web Dev"
                        position={[-20, -6, 10]}
                        rotation={[0, 1.570796, 0]}
                    />
                </group>
            </>
        )
    }
    return (
        <>
            <ListText/>
        </>
    )
}
