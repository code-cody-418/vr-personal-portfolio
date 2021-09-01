import React, {useMemo, useRef} from "react";
import * as THREE from "three"
import {useLoader} from "@react-three/fiber";
import Blender from "../Blender";
//
// /Basaro_Regular.json
// /Ranille-Normal-Regular.json
// /Roboto-Slab-Bold.json
// /Saiyan-Sans-Regular.json

export const SkillsListText = () => {
    const FontConfig = ({text, position, rotation}) => {
        const font = useLoader(THREE.FontLoader, "/Roboto-Slab-Bold.json");
        const config = useMemo(
            () => ({
                font: font,
                size: 1.5,
                height: 0.2,
                curveSegments: 32,
                bevelEnabled: false,
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
                {/*<Blender*/}
                {/*    position={[19, 0, 0]}*/}
                {/*    rotation={[0, -1.570796, 0]}*/}
                {/*/>*/}
                <group
                    //this group moves the whole list
                    position={[0, 0, -15]} >
                    <FontConfig
                        text="React"
                        position={[20, 4, 0]} //separate each new item in list by y-2
                        rotation={[0, -1.570796, 0]}
                    />
                    <FontConfig
                        text="Express"
                        position={[20, 2, 0]}
                        rotation={[0, -1.570796, 0]}
                    />
                    <FontConfig
                        text="Redux"
                        position={[20, 0, 0]}
                        rotation={[0, -1.570796, 0]}
                    />
                    <FontConfig
                        text="Docker"
                        position={[20, -2, 0]}
                        rotation={[0, -1.570796, 0]}
                    />
                    <FontConfig
                        text="Bootstrap"
                        position={[20, -4, 0]}
                        rotation={[0, -1.570796, 0]}
                    />
                    <FontConfig
                        text="GitHub"
                        position={[20, -6, 0]}
                        rotation={[0, -1.570796, 0]}
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
