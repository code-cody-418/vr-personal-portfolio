import React, {useMemo, useRef} from "react";
import * as THREE from "three"
import {useLoader} from "@react-three/fiber";


export const ProjectsTitleText = () => {
    const FontConfig = ({text, position, rotation}) => {
        const font = useLoader(THREE.FontLoader, "/Saiyan-Sans-Regular.json");
        const config = useMemo(
            () => ({
                font: font,
                size: 2,
                height: 0.2,
                curveSegments: 32,
                bevelEnabled: true,
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
                        <meshNormalMaterial/>
                    </mesh>
                </group>
            </>
        )
    }

    const TitleText = () => {
        return (
            <>
                {/*<TransformControls*/}
                {/*// enabled={true}*/}
                {/*// showX={true}*/}
                {/*>*/}
                <group
                    // onClick={handleShow}
                    onClick={({camera}) => camera.lookAt(-30, 0, 0)}

                >
                    <FontConfig
                        text="Projects"
                        position={[-15, 3, 5]}
                        rotation={[0, 1, 0]}
                    />
                </group>
                {/*</TransformControls>*/}
            </>
        )
    }

    return (
        <>
            <TitleText/>
        </>
    )
}
