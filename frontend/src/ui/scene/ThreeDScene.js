import React, {Suspense, useEffect, useState} from "react";
import {Environment, OrthographicCamera, PerspectiveCamera, Stars} from "@react-three/drei";
import backgroundHDR from "./black-hdri.HDR"
import {VRCanvas, DefaultXRControllers, Hands} from "@react-three/xr";
import {OrbitControls, Loader} from "@react-three/drei";
import {TitleText} from "./3d-text/TitleText";
import {SkillsTitleText} from "./3d-text/SkillsTitleText";
import {ProjectsTitleText} from "./3d-text/ProjectsTitleText";
import {ProjectsListText} from "./3d-text/ProjectsListText";
import {SkillsListText} from "./3d-text/SkillsListText";
import {ReferenceCenter, ReferenceProject, ReferenceSkills, RightArrow} from "./arrows/Arrows";
import {Walls} from "./walls/Walls";
import {SkillsIcons} from "./skills-icons/SkillsIcons";
import {TitleProfessionText} from "./3d-text/TitleProfessionText";
import {ContactFormText} from "./3d-text/ContactFormText";

import Mouse01 from "../tutorial/Mouse01";

export const ThreeDScene = () => {



    return (
        <>
            <VRCanvas
                // shadows
                // camera={{position: [0, 0, 0], fov: 55}}
                // resize={0.5}
                // onCreated={({camera}) => camera.lookAt(0, 0, -35)}
                // orthographic={true}

            >
                <DefaultXRControllers/>
                <Hands/>

                <Suspense fallback={null}>

                    <OrbitControls
                        enablePan={true}
                        enableZoom={true}

                        // distance of camera creation
                        minDistance={0}
                        maxDistance={3}

                        rotateSpeed={0.3}

                        // vertical angle limit
                        minPolarAngle={1.5708}
                        maxPolarAngle={1.5708}

                        // horizontal angle limit
                        minAzimuthAngle={-1.57}
                        maxAzimuthAngle={1.57}


                        // // extras
                        // // minZoom={0}
                        // // maxZoom={5}
                        //
                        // // vertical angle limit
                        // // minPolarAngle={0}
                        // // maxPolarAngle={1.5}
                    />


                    <ambientLight intensity={1}/>
                    {/*<directionalLight*/}
                    {/*    castShadow*/}
                    {/*    position={[0, 15, 25]}*/}
                    {/*    intensity={2}*/}
                    {/*    // shadow-mapSize-width={1024}*/}
                    {/*    // shadow-mapSize-height={1024}*/}
                    {/*    // shadow-camera-far={100}*/}
                    {/*    // shadow-camera-left={-50}*/}
                    {/*    // shadow-camera-right={50}*/}
                    {/*    // shadow-camera-top={50}*/}
                    {/*    // shadow-camera-bottom={-50}*/}
                    {/*/>*/}
                    {/*<pointLight position={[-10, 0, -20]} intensity={0.5}/>*/}
                    {/*<pointLight position={[0, 0, 0]} intensity={1.5}/>*/}


                    <Environment files={backgroundHDR} background={true}/>
                    <group>
                        <group

                        >
                            <TitleText

                            />
                            <TitleProfessionText/>
                            <Mouse01
                                position={[3, -8, -15]}
                                rotation={[.4, -1.3, .2]}
                                scale={0.05}
                            />

                        </group>

                        <ContactFormText/>

                        <ProjectsTitleText/>
                        <ProjectsListText/>

                        <group
                            position={[0, 0, 0]}
                            rotation={[0, 0, 0]}
                        >
                            <SkillsTitleText/>
                            <SkillsListText/>
                        </group>

                        {/*<ReferenceCenter/>*/}
                        {/*<ReferenceProject/>*/}
                        {/*<ReferenceSkills/>*/}
                        {/*<RightArrow/>*/}

                        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade/>

                        {/*<Walls/>*/}

                    </group>
                </Suspense>
            </VRCanvas>
            <Loader/>
        </>
    )
}
