import React, {useEffect, useMemo, useRef, useState} from "react";
import * as THREE from "three"
import {useFrame, useLoader} from "@react-three/fiber";
import {useResponsive3d} from "../../../customHooks/useResponsive3d";



export const TitleText = () => {


    const FontConfig = ({text, position}) => {
        const font = useLoader(THREE.FontLoader, "/Saiyan-Sans-Regular.json");


        //sets the size of the 3d text based on mobile or desktop

        const { titleSize } = useResponsive3d()


        const config = useMemo(
            () => ({
                font: font,
                size: titleSize,
                height: 0.2,
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

        //hover cursor change
        const [hovered, setHovered] = useState(false)

        useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

        return (
            <>
                <group
                    position={position}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
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
        return (
            <>
                <group
                    // onClick={handleShow}
                    onClick={({camera}) => camera.lookAt(30, 0, 0)}
                >
                    <FontConfig
                        text="Codys Portfolio"
                        position={[-10, 0, -10]}
                        // rotation={[0, -1, 0]}
                    />
                </group>
                <group
                    // onClick={handleShow}
                    onClick={({camera}) => camera.lookAt(0, 0, 0)}
                >
                    <FontConfig
                        text="Back"
                        position={[0, 0, 10]}
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
