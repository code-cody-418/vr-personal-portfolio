import React, {useEffect, useRef} from "react";

import {useFrame} from "@react-three/fiber";
import {useBox} from "@react-three/cannon";
import {Box} from "@react-three/drei";


export const Cube = (props) => {

    const [ref, api] = useBox(() => ({
        mass: 1,
        velocity: [0, 0, 0],
        position: [0, 0, 0]
    }))

    //testing out use-cannon

    const position = useRef([0,0,0])

    useEffect(() => {
        position.current = ref.current.position

    }, [])

    useEffect(() => {
        console.log("ref position", ref.current.position)
        console.log(" position", position.current.position)
        console.log("ref", ref)

    }, [])

    if (ref.current) {
        ref.current.updateMatrix()
        console.log("matrix position", ref.current.position)
    }



    // useFrame(({clock}) => {
    //     api.velocity.set(0, 1, 0)
    //     // ref.current.updateMatrix()
    //     // console.log("matrix position", ref.current.matrix)
    // })

    // useFrame(({ clock }) => api.position.set(Math.sin(clock.getElapsedTime()) * 5, 0, 0))
    //
    // const velocity = useRef([0, 0, 0])
    // useEffect(() => {
    //     const unsubscribe = api.velocity.subscribe((v) => (velocity.current = v))
    //     return unsubscribe
    // }, [])


    return (
        <>
            <Box ref={ref}>
                <meshNormalMaterial />
            </Box>

{/*<mesh castShadow={true} ref={ref} onClick={(e) => console.log("is this on", e )}>*/}
{/*    <boxGeometry />*/}
{/*    <meshStandardMaterial color={"#f30707"} />*/}
{/*</mesh>*/}
        </>
    )
}
