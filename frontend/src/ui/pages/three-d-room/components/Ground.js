import React from "react";
import {usePlane} from "@react-three/cannon";

import marble from '../images/marble.jpg'
import {LinearMipMapLinearFilter, NearestFilter, RepeatWrapping, TextureLoader} from "three";

export const Ground =  (props) => {

const [ref] = usePlane( () => ({rotation: [-Math.PI / 2, 0, 0], ...props}))

const texture = new TextureLoader().load(marble)

    texture.magFilter = NearestFilter
    texture.minFilter = LinearMipMapLinearFilter
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.repeat.set(10,10)

    return (
        <>
            <mesh ref={ref} receiveShadow>
                <planeBufferGeometry attach='geometry' args={[100,100]} />
                <meshStandardMaterial map={texture} attach='material' />
            </mesh>
        </>
    )
}
