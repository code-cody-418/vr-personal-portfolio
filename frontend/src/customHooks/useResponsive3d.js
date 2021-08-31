import React, {useEffect, useState} from "react";

// A responsive hook that returns 3d object sizes as numbers
export const useResponsive3d = () => {

    const [width, setWidth] = useState(window.innerWidth)
    const [titleSize, setTitleSize] = useState(0)
    const [titlePosition, setTitlePosition] = useState(0)
    const breakpoint = 620

    useEffect( () => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", handleWindowResize)
    }, [width, titleSize])

    useEffect( () => {
        const handleResize = () => {
            if (breakpoint < width) {
                return setTitleSize(4), setTitlePosition(-4)
            } else if (breakpoint > width)
                return setTitleSize(1), setTitlePosition(0)
        }
        handleResize()
        return () => handleResize
    }, [width, titleSize])

    return { width, titleSize, titlePosition }
}
