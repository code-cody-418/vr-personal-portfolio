import React, {useEffect, useMemo, useRef, useState} from "react";
import * as THREE from "three"
import {useLoader} from "@react-three/fiber";
import {Interactive} from "@react-three/xr";


export const SkillsTitleText = () => {

    const [color, setColor] = useState("#00b7ff")


    const FontConfig = ({text, position, rotation, color}) => {
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
                        <meshBasicMaterial color={color}/>
                    </mesh>
                </group>
            </>
        )
    }
    const TitleText = () => {
        return (
            <>
                <group
                    onClick={ () => setColor("#0000ff")}

                >
                    <Interactive
                        onSelect={() => setColor("#0000ff")}
                        onHover={() => console.log("Hovered")}
                    >
                        <FontConfig
                            text="Tech Skills"
                            position={[20, 7, -15]}
                            rotation={[0, -1.570796, 0]}
                            color={color}
                        />
                    </Interactive>
                </group>
            </>
        )
    }
    return (
        <>
        <TitleText />
        </>
    )
}



