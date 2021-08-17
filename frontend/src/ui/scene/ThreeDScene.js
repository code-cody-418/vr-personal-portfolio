import React, {Suspense, useEffect} from "react";
import {Canvas} from "@react-three/fiber";
import {Environment} from "@react-three/drei";
import Kakashi from "./Kakashi";
import backgroundHDR from "./black-hdri.HDR"
import {VRCanvas, DefaultXRControllers, Hands, useXR} from "@react-three/xr";
import {OrbitControls} from "@react-three/drei";
import Blender from "./Blender";



export const ThreeDScene = () => {
    return (
        <>
            <VRCanvas
                // shadows
                // camera={{position: [0, 15, 35], fov: 55}}
                // resize={0.5}
                // onCreated={({camera}) => camera.lookAt(0, 0, -35)}
            >

                {/*<OrbitControls />*/}
                <DefaultXRControllers />

                <Hands />

                {/*<ambientLight intensity={1} />*/}
                <directionalLight
                    castShadow
                    position={[0, 15, 25]}
                    intensity={1}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={100}
                    shadow-camera-left={-50}
                    shadow-camera-right={50}
                    shadow-camera-top={50}
                    shadow-camera-bottom={-50}
                />
                <pointLight position={[-10, 0, -20]} intensity={0.5}/>
                <pointLight position={[0, 0, 0]} intensity={1.5}/>
                <Suspense fallback={null}>
                    <Environment files={backgroundHDR} background={true}/>
                    <group>
                        {/*<Goku01 gokuAction={gokuAction} name={name} />*/}
                        {/*<Naruto narutoAction={narutoAction} name={name} />*/}
                        <Kakashi/>
                        {/*<Korra korraAction={korraAction} name={name} />*/}
                        {/*<Blender />*/}

                        <mesh
                            rotation={[-Math.PI / 2, 0, 0]}
                            position={[0, 0, 0]}
                            receiveShadow
                        >
                            <planeBufferGeometry attach='geometry' args={[20, 90]}/>
                            {/*<shadowMaterial attach='material' opacity={0.3} />*/}
                            <meshStandardMaterial attach='material' color={"#add4e3"}/>
                        </mesh>
                    </group>
                </Suspense>
            </VRCanvas>
        </>
    )
}
