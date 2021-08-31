import React from "react";

export const Walls = () => {

    const wallColor = "#A9A9A9"
    const wallHeight = 20
    const wallWidth = 70

    return (
        <>
            {/*floor*/}
            <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -1, 0]}
                // receiveShadow
            >
                <planeBufferGeometry attach='geometry' args={[60, 60]}/>
                {/*<shadowMaterial attach='material' opacity={0.3} />*/}
                <meshStandardMaterial attach='material' color={"#554b4b"} />
            </mesh>

            {/*projects wall*/}
            <mesh
                rotation={[-Math.PI / 2, 1.57, 0]}
                position={[-30,-1, 0]}
                // receiveShadow
            >
                <planeBufferGeometry attach='geometry' args={[wallHeight, wallWidth]}/>
                {/*<shadowMaterial attach='material' opacity={0.3} />*/}
                <meshStandardMaterial attach='material' color={wallColor} />
            </mesh>

            {/*skills wall*/}
            <mesh
                rotation={[-Math.PI / 2, -1.57, 0]}
                position={[30, -1, 0]}
                // receiveShadow
            >
                <planeBufferGeometry attach='geometry' args={[wallHeight, wallWidth]}/>
                {/*<shadowMaterial attach='material' opacity={0.3} />*/}
                <meshStandardMaterial attach='material' color={wallColor} />
            </mesh>

            {/*Title Wall*/}
            <mesh
                rotation={[Math.PI, Math.PI, 1.57]}
                position={[0, -1, -30]}
                // receiveShadow
            >
                <planeBufferGeometry attach='geometry' args={[wallHeight, wallWidth]}/>
                {/*<shadowMaterial attach='material' opacity={0.3} />*/}
                <meshStandardMaterial attach='material' color={wallColor} />
            </mesh>

            {/*Back Wall*/}
            <mesh
                rotation={[0, Math.PI, -1.57]}
                position={[0, -1, 30]}
                // receiveShadow
            >
                <planeBufferGeometry attach='geometry' args={[wallHeight, wallWidth]} />
                {/*<shadowMaterial attach='material' opacity={0.3} />*/}
                <meshStandardMaterial attach='material' color={wallColor} />
            </mesh>
        </>
    )
}
