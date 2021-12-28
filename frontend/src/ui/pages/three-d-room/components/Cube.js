import React from "react";


import { useBox } from "@react-three/cannon";

export const Cube = (props) => {

    const [ref] = useBox(() => ({
        mass: 1,
        position: [0, 5, 0],
        ...props
    }))



    return (
        <>
<mesh castShadow={true} ref={ref} onClick={(e) => console.log("is this on", e )}>
    <boxGeometry />
    <meshStandardMaterial color={"#f30707"} />
</mesh>
        </>
    )
}
