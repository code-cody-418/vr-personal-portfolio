import React, {useEffect, useMemo, useRef, useState} from "react";
import * as THREE from "three"
import {useLoader} from "@react-three/fiber";
import {useResponsive3d} from "../../../customHooks/useResponsive3d";


export const TitleText = ({handleShow, handleClose }) => {

    const FontConfig = ({text}) => {
        const font = useLoader(THREE.FontLoader, "/Saiyan-Sans-Regular.json");

        //sets the size of the 3d text based on mobile or desktop using a custom hook
        const { titleSize } = useResponsive3d()

        const config = useMemo(
            () => ({
                font: font,
                size: 5,
                height: 0.4,
                curveSegments: 32,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }),
            [font, titleSize]
        );
        const mesh = useRef();

        return (
            <>
                <group
                >
                    <mesh ref={mesh} >
                        <textGeometry args={[text, config]} />
                        <meshNormalMaterial />
                    </mesh>
                </group>
            </>
        )
    }

    const PortfolioText = () => {

        const { titlePosition } = useResponsive3d()

        //hover cursor change
        const [hovered, setHovered] = useState(false)
        useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

        return (
            <>
                <group
                    onClick={handleShow}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                    position={[-9, 6, -15]}
                >
                    <FontConfig
                        text="Codys"
                    />
                </group>
                <group
                    onClick={handleShow}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                    position={[-9, 0, -15]}
                >
                    <FontConfig
                        text="Portfolio"
                    />
                </group>
            </>
        )
    }
    return (
        <>
            <PortfolioText />
        </>
    )
}
