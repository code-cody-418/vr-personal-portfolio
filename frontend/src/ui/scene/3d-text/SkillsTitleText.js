import React, {useMemo, useRef, useState} from "react";
import * as THREE from "three"
import {useLoader} from "@react-three/fiber";
import {Interactive} from "@react-three/xr";


export const SkillsTitleText = () => {
    const [color, setColor] = useState("#ff0000")

    const FontConfig = ({text, position, rotation, color}) => {
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
                    <mesh ref={mesh}>
                        <textGeometry args={[text, config]}/>
                        <meshStandardMaterial color={color}/>
                    </mesh>
                </group>
            </>
        )
    }
    const TitleText = () => {
        return (
            <>
                <group
                    // onClick={handleShow}
                    onClick={ () => setColor("#0000ff")}

                >
                    <Interactive
                        onSelect={() => setColor("#0000ff")}
                        onHover={() => console.log("Hovered")}>
                        <FontConfig
                            text="Tech Skills"
                            position={[10, 3, 0]}
                            rotation={[0, -2, 0]}
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



