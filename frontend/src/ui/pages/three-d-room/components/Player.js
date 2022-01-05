import React, {useEffect, useRef, useState} from "react";
import {useFrame, useThree} from "@react-three/fiber";
import {useKeyboardControls} from "../hooks/useKeyboardControls";
import {FPVControls} from "./FPVControls";
import {Vector3} from "three";
import {useBox, useSphere} from "@react-three/cannon";
import Kakashi from "../models/Kakashi";

const SPEED = 0.1

export const Player = (props) => {
    const {camera} = useThree()

    //sphere movement controls
    const {
        moveForward,
        moveBackward,
        moveLeft,
        moveRight,
        jump
    } = useKeyboardControls()


    const ref = useRef()

    //this turns the walking animation to true or false
    const [walking, setWalking] = useState(false)

    useEffect(() => {

        if (moveForward === true || moveBackward === true || moveLeft === true || moveRight === true) {
            setWalking(true)
        } else {
            setWalking(false)
        }
    }, [moveForward, moveBackward, moveLeft, moveRight])

    //working using velocity
    // const [ref, api] = useBox(() => ({
    //     mass: 1,
    //     type: 'Dynamic',
    //     position: [0, 0, 0],
    //     // rotation: [Math.PI / 2, 0, Math.PI],
    //     // ...props,
    // }));

    //working using velocity
    //this subscribes to the changing value from the api. It then sets these values in an object for position
    // const pos = useRef({x: 0, y: 1, z: 0})
    // useEffect(() => api.position.subscribe(v => {
    //     pos.current.x = v[0]
    //     pos.current.y = v[1]
    //     pos.current.z = v[2]
    // }), [])

// console.log("api", api.position.subscribe(v => console.log("v",v)))

    useFrame(() => {

        // //working using velocity. Gets the camera position to follow the position of the ref
        // camera.position.copy(pos.current);
        // camera.position.z = pos.current.z + 3
        // camera.position.y = pos.current.y + 1


        // working using position
                camera.position.copy(ref.current.position)
                camera.position.z = (ref.current.position.z + 3)
                camera.position.y = ref.current.position.y + 1


        const direction = new Vector3()

        const frontVector = new Vector3(
            0,
            0,
            (moveBackward ? 0.1 : 0) - (moveForward ? 0.1 : 0)
        )

        const sideVector = new Vector3(
            (moveLeft ? 0.1 : 0) - (moveRight ? 0.1 : 0),
            0,
            0
        )

        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(SPEED)
            .applyEuler(camera.rotation)

        //working using position
        ref.current.position.x = (ref.current.position.x + direction.x)
        ref.current.position.z = (ref.current.position.z + direction.z)

        //working using velocity
        // api.velocity.set(direction.x, 0, direction.z)
        // console.log("ref rotation", ref)
    })


    return (
        <>
            <FPVControls/>

            <group ref={ref}>
            <Kakashi kakashiAction={"walk"} name={"kakashi"} walking={walking}/>
            </group>


            {/*<mesh ref={ref} position={[0, 2, 0]}>*/}
            {/*    <sphereGeometry/>*/}
            {/*    <meshStandardMaterial color={"#f30707"}/>*/}
            {/*</mesh>*/}

        </>
    )
}
