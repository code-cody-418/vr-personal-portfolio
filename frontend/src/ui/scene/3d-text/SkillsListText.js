import React, {useEffect, useMemo, useRef, useState} from "react";
import * as THREE from "three"
import {useLoader} from "@react-three/fiber";
import Blender from "../Blender";
import {SkillsIcons} from "../skills-icons/SkillsIcons";

//
// /Basaro_Regular.json
// /Ranille-Normal-Regular.json
// /Roboto-Slab-Bold.json
// /Saiyan-Sans-Regular.json


export const SkillsListText = () => {

    const FontConfig = ({text, position, rotation, uniqueColor}) => {
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
                        <meshStandardMaterial color={uniqueColor}/>
                    </mesh>
                </group>
            </>
        )
    }

    const ListText = () => {

        const [iconState, setIconState] = useState("reactActive")

        const startingColor = "#8f6bd9"

        const [reactColor, setReactColor] = useState(startingColor)
        const [expressColor, setExpressColor] = useState(startingColor)
        const [reduxColor, setReduxColor] = useState(startingColor)

        return (
            <>
                {/*<Blender*/}
                {/*    position={[19, 0, 0]}*/}
                {/*    rotation={[0, -1.570796, 0]}*/}
                {/*/>*/}
                <group
                    //this group moves the whole list
                    position={[0, 0, -15]}>
                    <group
                        onPointerEnter={() => {
                            setIconState("reactActive")
                            setReactColor("#61dafb")
                        }}
                        onPointerLeave={() => setReactColor(startingColor)}
                    >
                        <FontConfig
                            text="React"
                            position={[20, 4, 0]} //separate each new item in list by y-2
                            rotation={[0, -1.570796, 0]}
                            uniqueColor={reactColor}
                        />
                    </group>
                    <group
                        onPointerEnter={() => {
                            setIconState("expressActive")
                            setExpressColor("#FFFFFF")
                        }}
                        onPointerLeave={() => setExpressColor(startingColor)}
                    >
                        <FontConfig
                            text="Express"
                            position={[20, 2, 0]}
                            rotation={[0, -1.570796, 0]}
                            uniqueColor={expressColor}
                        />
                    </group>
                    <group
                        onPointerEnter={() => {
                            setIconState("reduxActive")
                            setReduxColor("#764abc")
                        }}
                        onPointerLeave={() => setReduxColor(startingColor)}
                    >
                        <FontConfig
                            text="Redux"
                            position={[20, 0, 0]}
                            rotation={[0, -1.570796, 0]}
                            uniqueColor= {reduxColor}
                        />
                    </group>
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
                    <SkillsIcons
                        position={[0, 0, 0]}
                        iconState={iconState}
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
