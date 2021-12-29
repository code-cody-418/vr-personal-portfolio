import React, {useEffect} from "react";
import {Box} from "@react-three/drei";
import {useBox} from "@react-three/cannon";
import {useFrame} from "@react-three/fiber";

export const CubeTest = () => {

    const [ref, api] = useBox(() => ({}))



    useEffect(() => {
        if (ref.current){
            if(ref.current.matrixAutoUpdate === false) {

            }
        }
    }, [])

    useFrame(() => {
        // ref.current.updateMatrix()
        // ref.current.matrixAutoUpdate = true

        // console.log(ref.current.matrixAutoUpdate)
        api.velocity.set(0, 0.5, 0)
        // console.log(ref.current.position)
    })

    // useEffect(() => {
    //     ref.current.matrixAutoUpdate = true
    //     console.log(ref.current.matrixAutoUpdate)
    // }, [])


    return (
        <>


            <Box ref={ref} onClick={(e) => console.log("e", e)}>
                <meshStandardMaterial />
            </Box>

        </>
    )
}
