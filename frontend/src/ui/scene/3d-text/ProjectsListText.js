import React, {useMemo, useRef} from "react";
import * as THREE from "three"
import {useLoader} from "@react-three/fiber";
import {Interactive} from "@react-three/xr";
import {SkillsTitleText} from "./SkillsTitleText";
import Blender from "../Blender";
import {SkillsListText} from "./SkillsListText";
import Kakashi from "../Kakashi";


export const ProjectsListText = () => {
    const FontConfig = ({text, position, rotation}) => {
        const font = useLoader(THREE.FontLoader, "/Saiyan-Sans-Regular.json");
        const config = useMemo(
            () => ({
                font: font,
                size: 1,
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
                        <meshNormalMaterial/>
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
                    position={[-30, 4, 0]}
                    rotation={[0, 1.570796, 0]}
                />
                <Kakashi
                    position={[-29, 4, -6]}
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
