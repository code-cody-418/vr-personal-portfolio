import React, {Suspense, useEffect, useState} from "react";
import * as THREE from "three"
import {Canvas, useFrame} from "@react-three/fiber";
import {Environment, PerspectiveCamera, Stars, TransformControls} from "@react-three/drei";
import Kakashi from "./Kakashi";
import backgroundHDR from "./black-hdri.HDR"
import {VRCanvas, DefaultXRControllers, Hands, useXR, useController, XRController, Interactive} from "@react-three/xr";
import {OrbitControls} from "@react-three/drei";
import Blender from "./Blender";
import {TitleText} from "./3d-text/TitleText";
import {SkillsTitleText} from "./3d-text/SkillsTitleText";
import {ProjectsTitleText} from "./3d-text/ProjectsTitleText";
import {ProjectsListText} from "./3d-text/ProjectsListText";
import {SkillsListText} from "./3d-text/SkillsListText";
import {InfoModal} from "./InfoModal";


export const ThreeDScene = ({show, handleClose, handleShow}) => {
    const [color, setColor] = useState("#ff0000")

    return (
        <>
            <InfoModal show={show} handleClose={handleClose} handleShow={handleShow}/>
            <VRCanvas
                // shadows
                // camera={{position: [0, 15, 35], fov: 55}}
                // resize={0.5}
                // onCreated={({camera}) => camera.lookAt(0, 0, -35)}
            >


                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    maxDistance={5}
                    rotateSpeed={0.3}
                    //vertical angle limit
                    // minPolarAngle={0}
                    // maxPolarAngle={1.5}
                    minPolarAngle={1.5708}
                    maxPolarAngle={1.5708}
                    //horizontal angle limit
                    // minAzimuthAngle={-1}
                    // maxAzimuthAngle={1}
                />
                <DefaultXRControllers/>

                <Hands/>

                <ambientLight intensity={1} />
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

                        <group
                            // onClick={handleShow}
                            onClick={({camera}) => camera.lookAt(30, 0, 0)}
                        >
                            <TitleText
                                text="Codys Portfolio"
                                position={[-7, 0, -10]}
                                // rotation={[0, -1, 0]}
                            />
                        </group>
                        <group
                            // onClick={handleShow}
                            onClick={({camera}) => camera.lookAt(0, 0, 0)}
                        >
                            <TitleText
                                text="Back"
                                position={[0, 0, 10]}
                            />
                        </group>


                        <group
                            // onClick={handleShow}
                            onClick={({camera}) => camera.lookAt(30, 0, 0)}
                        >
                        <Interactive
                            onSelect={() => setColor("#0000ff")}
                            onHover={() => console.log("Hovered")}>
                            <SkillsTitleText
                                text="Skills"
                                position={[10, 3, 0]}
                                rotation={[0, -1, 0]}
                                color={color}
                            />
                        </Interactive>
                        </group>
                        <Blender
                            position={[10, -2, 3]}
                            rotation={[0, -1, 0]}
                        />
                        <SkillsListText
                            text="React"
                            position={[10, 1, 3]}
                            rotation={[0, -1, 0]}
                        />

                        {/*<TransformControls*/}
                        {/*// enabled={true}*/}
                        {/*// showX={true}*/}
                        {/*>*/}
                        <group
                            // onClick={handleShow}
                            onClick={({camera}) => camera.lookAt(-30, 0, 0)}
                        >
                        <ProjectsTitleText
                            text="Projects"
                            position={[-15, 3, 5]}
                            rotation={[0, 1, 0]}
                        />
                        </group>
                        {/*</TransformControls>*/}
                        <ProjectsListText
                            text="Exp Ninja"
                            position={[-15, 1, 5]}
                            rotation={[0, 1, 0]}
                        />
                        <Kakashi
                            position={[-10, 0, 0]}
                            rotation={[0, 1, 0]}
                        />

                        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade/>
                    </group>
                </Suspense>
            </VRCanvas>
        </>
    )
}
