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

        //set the state of the icon
        const [iconState, setIconState] = useState(null)

        //color of text before being changed
        const startingColor = "#8f6bd9"

        //allows each skill to change color
        const [reactColor, setReactColor] = useState(startingColor)
        const [expressColor, setExpressColor] = useState(startingColor)
        const [reduxColor, setReduxColor] = useState(startingColor)
        const [dockerColor, setDockerColor] = useState(startingColor)
        const [bootstrapColor, setBootstrapColor] = useState(startingColor)
        const [githubColor, setGithubColor] = useState(startingColor)

        //Functionality to 30 second timer
        const [thirtySeconds, setThirtySeconds] = useState(30)
        const [timerOnOff, setTimerOnOff] = useState(true)

        useEffect(() => {
            if (timerOnOff === true) {
                if (thirtySeconds === -1) {
                    setThirtySeconds(30)
                } else if (thirtySeconds > -2) {
                    const intervalId = setInterval(() => {
                        setThirtySeconds(thirtySeconds => thirtySeconds - 1)
                    }, 1000)
                    console.log("seconds", thirtySeconds)
                    return () => clearInterval(intervalId)
                }
            }
        }, [thirtySeconds, timerOnOff])

        useEffect(() => {
            if (thirtySeconds > 25) {
                setIconState("reactActive")
                setReactColor("#61dafb")
                setGithubColor(startingColor)
            } else if (thirtySeconds > 20) {
                setIconState("expressActive")
                setExpressColor("#FFFFFF")
                setReactColor(startingColor)
            } else if (thirtySeconds > 15) {
                setIconState("reduxActive")
                setReduxColor("#764abc")
                setExpressColor(startingColor)
            } else if (thirtySeconds > 10) {
                setIconState("dockerActive")
                setDockerColor("#2496ed")
                setReduxColor(startingColor)
            } else if (thirtySeconds > 5) {
                setIconState("bootstrapActive")
                setBootstrapColor("#7952b3")
                setDockerColor(startingColor)
            } else if (thirtySeconds > 0) {
                setIconState("githubActive")
                setGithubColor("#FFF")
                setBootstrapColor(startingColor)
            }
        }, [iconState, thirtySeconds])

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
                            setTimerOnOff(false)
                        }}
                        onPointerLeave={() => {
                            setReactColor(startingColor)
                            setTimerOnOff(true)
                        }}
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
                            uniqueColor={reduxColor}
                        />
                    </group>
                    <group
                        onPointerEnter={() => {
                            setIconState("dockerActive")
                            setDockerColor("#2496ed")
                        }}
                        onPointerLeave={() => setDockerColor(startingColor)}
                    >
                        <FontConfig
                            text="Docker"
                            position={[20, -2, 0]}
                            rotation={[0, -1.570796, 0]}
                            uniqueColor={dockerColor}
                        />
                    </group>
                    <group
                        onPointerEnter={() => {
                            setIconState("bootstrapActive")
                            setBootstrapColor("#7952b3")
                        }}
                        onPointerLeave={() => setBootstrapColor(startingColor)}
                    >
                        <FontConfig
                            text="Bootstrap"
                            position={[20, -4, 0]}
                            rotation={[0, -1.570796, 0]}
                            uniqueColor={bootstrapColor}
                        />
                    </group>
                    <group
                        onPointerEnter={() => {
                            setIconState("githubActive")
                            setGithubColor("#FFF")
                        }}
                        onPointerLeave={() => setGithubColor(startingColor)}
                    >
                        <FontConfig
                            text="GitHub"
                            position={[20, -6, 0]}
                            rotation={[0, -1.570796, 0]}
                            uniqueColor={githubColor}
                        />
                    </group>
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
