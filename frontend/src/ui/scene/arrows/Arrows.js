import React, {useEffect, useState} from "react";
import {Box} from "@react-three/drei";

export const ReferenceCenter = () => {

    const [hovered, setHovered] = useState(false)

    useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

    return (
        <>
            <group
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                onClick={({camera}) => camera.lookAt(30, 0, 0)}
            >
                <Box
                    position={[0, 0, 0]}
                    // rotation={[0, -1, 0]}

                />
            </group>
        </>
    )
}

export const RightArrow = () => {

    const [hovered, setHovered] = useState(false)

    useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

    return (
        <>
        <group
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={({camera}) => camera.lookAt(30, 0, 0)}
        >
            <Box
                position={[10, -2, -10]}
                // rotation={[0, -1, 0]}
            />
        </group>
        </>
    )
}
