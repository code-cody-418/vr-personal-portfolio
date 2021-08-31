import React, {useEffect, useState} from "react";

// A responsive hook that returns 3d object sizes as numbers and returns a position as a number
export const useResponsive3d = () => {

    const [width, setWidth] = useState(0)
    const [titleSize, setTitleSize] = useState(0)
    const [titlePosition, setTitlePosition] = useState(0)
    const breakpoint = 620

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", handleWindowResize)
    }, [width, titleSize])

    useEffect(() => {
        const handleResize = () => {
            if (breakpoint < width) {
                setTitleSize(5)
                setTitlePosition(-15)
            } else if (breakpoint > width) {
                setTitleSize(3)
                setTitlePosition(-9)
            }
        }
        handleResize()
        return () => handleResize
    }, [width, titleSize])

    return {width, titleSize, titlePosition}
}
