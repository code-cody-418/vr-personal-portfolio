import React, {useMemo, useRef} from "react";
import * as THREE from "three"
import {useLoader} from "@react-three/fiber";


export const SkillsTitleText =({ text, position, rotation, color}) => {
    const font = useLoader(THREE.FontLoader, "/Saiyan-Sans-Regular.json");
    const config = useMemo(
        () => ({
            font: font,
            size: 2,
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
            <mesh ref={mesh} >
                <textGeometry args={[text, config]} />
                <meshStandardMaterial color={color} />
            </mesh>
        </group>
        </>
    )
}
