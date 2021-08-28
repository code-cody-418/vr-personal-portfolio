import React, {useEffect, useMemo, useRef, useState} from "react";
import * as THREE from "three"
import {useFrame, useLoader} from "@react-three/fiber";


export const TitleText = ({text, position, vAlign = "center", hAlign = "center"}) => {
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

    //hover cursor change
    const [hovered, setHovered] = useState(false)

    useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

    //uncomplete example to animate Text
    // useFrame(({ clock }) => {
    //     const size = new THREE.Vector3();
    //     mesh.current.geometry.computeBoundingBox();
    //     mesh.current.geometry.boundingBox.getSize(size);
    //     mesh.current.position.x =
    //         hAlign === "center" ? -size.x / 2 : hAlign
    // });
    return (
        <>
            <group
                position={position}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <mesh ref={mesh}>
                    <textGeometry center args={[text, config]}/>
                    <meshNormalMaterial/>
                </mesh>
            </group>
        </>
    )
}
