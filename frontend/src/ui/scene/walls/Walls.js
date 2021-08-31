import React from "react";

export const Walls = () => {
    return (
        <>
            {/*floor*/}
            <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -1, 0]}
                // receiveShadow
            >
                <planeBufferGeometry attach='geometry' args={[20, 90]}/>
                {/*<shadowMaterial attach='material' opacity={0.3} />*/}
                <meshStandardMaterial attach='material' color={"#add4e3"} />
            </mesh>

            {/*projects wall*/}
            <mesh
                rotation={[-Math.PI / 2, 1.57, 0]}
                position={[-30, 3, 5]}
                // receiveShadow
            >
                <planeBufferGeometry attach='geometry' args={[20, 90]}/>
                {/*<shadowMaterial attach='material' opacity={0.3} />*/}
                <meshStandardMaterial attach='material' color={"#add4e3"} />
            </mesh>

            {/*skills wall*/}
            <mesh
                rotation={[-Math.PI / 2, -1.57, 0]}
                position={[30, 8, 0]}
                // receiveShadow
            >
                <planeBufferGeometry attach='geometry' args={[20, 90]}/>
                {/*<shadowMaterial attach='material' opacity={0.3} />*/}
                <meshStandardMaterial attach='material' color={"#8f9bee"} />
            </mesh>

            {/*Front Wall*/}
            <mesh
                rotation={[Math.PI, Math.PI, 1.57]}
                position={[0, -1, -20]}
                // receiveShadow
            >
                <planeBufferGeometry attach='geometry' args={[20, 90]}/>
                {/*<shadowMaterial attach='material' opacity={0.3} />*/}
                <meshStandardMaterial attach='material' color={"#e53636"} />
            </mesh>

            {/*Back Wall*/}
            <mesh
                rotation={[0, Math.PI, -1.57]}
                position={[0, -1, 20]}
                // receiveShadow
            >
                <planeBufferGeometry attach='geometry' args={[20, 90]} />
                {/*<shadowMaterial attach='material' opacity={0.3} />*/}
                <meshStandardMaterial attach='material' color={"#e53636"} />
            </mesh>
        </>
    )
}
