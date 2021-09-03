import React, {useEffect, useMemo, useRef, useState} from "react";
import * as THREE from "three"
import {useLoader} from "@react-three/fiber";
import Blender from "../Blender";
import {SkillsIcons} from "../skills-icons/SkillsIcons";
import {Interactive} from "@react-three/xr";
import {useResponsive3d} from "../../../customHooks/useResponsive3d";

//
// /Basaro_Regular.json
// /Ranille-Normal-Regular.json
// /Roboto-Slab-Bold.json
// /Saiyan-Sans-Regular.json


export const TitleProfessionText = () => {

    // const {skillsTextSize} = useResponsive3d()

    const FontConfig = ({text, position, rotation, uniqueColor}) => {
        const font = useLoader(THREE.FontLoader, "/Roboto-Slab-Bold.json");
        const config = useMemo(
            () => ({
                font: font,
                size: 1,
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

    const ProfessionText = () => {

        //set the state of the icon
        const [textState, setTextState] = useState("Full Stack Website Creator")

        //color of text before being changed
        const startingColor = "#ea2e6f"

        //allows each skill to change color
        const [textColor, setTextColor] = useState(startingColor)

        //Functionality to 30 second timer
        const [thirtySeconds, setThirtySeconds] = useState(30)
        const [timerOnOff, setTimerOnOff] = useState(false)

        useEffect(() => {
            if (timerOnOff === true) {
                if (thirtySeconds === -1) {
                    setThirtySeconds(30)
                } else if (thirtySeconds > -2) {
                    const intervalId = setInterval(() => {
                        setThirtySeconds(thirtySeconds => thirtySeconds - 1)
                    }, 1000)
                    // console.log("seconds", thirtySeconds)
                    return () => clearInterval(intervalId)
                }
            }
        }, [thirtySeconds, timerOnOff])

        useEffect(() => {
            if (timerOnOff === true) {
                if (thirtySeconds === 30) {
                    setTextState("Full Stack")
                    setTextColor("#61dafb")
                } else if (thirtySeconds === 25) {
                    setTextState("Full Stack Website Creator")
                }
            }
        }, [textState, thirtySeconds])


        // const {skillsTextXPosition, skillsTextYPosition, skillsTextZPosition} = useResponsive3d()

        return (
            <>
                <FontConfig
                    text={textState}
                    position={[-10, -5, -15]} //separate each new item in list by y-2
                    rotation={[0, 0, 0]}
                    uniqueColor={textColor}
                />
            </>
        )
    }
    return (
        <>
            <ProfessionText/>
        </>
    )
}
