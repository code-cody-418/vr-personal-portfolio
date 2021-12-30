import React, {useRef} from "react";
import {useFrame, useThree} from "@react-three/fiber";
import {useKeyboardControls} from "../hooks/useKeyboardControls";
import {FPVControls} from "./FPVControls";
import {Vector3} from "three";
import {useSphere} from "@react-three/cannon";

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


    const [player, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        ...props
    }))

    const ref = useRef()


    useFrame(() => {



        camera.position.copy(ref.current.position)
        camera.position.z = (ref.current.position.z + 3)
        camera.position.y = ref.current.position.y + 1

        // camera.lookAt(ref.current.position.x, ref.current.position.y,  ref.current.position.z)

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

        ref.current.position.x = (ref.current.position.x + direction.x)
        ref.current.position.z = (ref.current.position.z + direction.z)

        // api.velocity.set(direction.x, 0, direction.z)
    })



    return (
        <>
            <FPVControls/>

            <group>
                <mesh ref={ref} position={[0, 2, 0]}>
                    <sphereGeometry />
                    <meshStandardMaterial color={"#f30707"}/>
                </mesh>
            </group>
        </>
    )
}
