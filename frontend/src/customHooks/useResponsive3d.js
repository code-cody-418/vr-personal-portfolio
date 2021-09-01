import React, {useEffect, useState} from "react";

// A responsive hook that returns sizes and positions as a number for 3D objects to be mobile Responcive


export const useResponsive3d = () => {

    //This is the window Width in which responsive behavior will occur
    const breakpoint = 620

    //setWidth is the current windows width in px
    const [width, setWidth] = useState(window.innerWidth)

    //these states change based on the breakpoints
    const [titleSize, setTitleSize] = useState(5)
    const [titleXPosition, setTitleXPosition] = useState(-9)
    const [titleYPosition, setTitleYPosition] = useState(6)


    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", handleWindowResize)
    }, [width, titleSize])

    useEffect(() => {
        const handleResize = () => {
            if (breakpoint < width) {
                //set front title
                setTitleSize(5)
                setTitleXPosition(-9)
                setTitleYPosition(6)
            } else if (breakpoint > width) {
                //set front title
                setTitleSize(3)
                setTitleXPosition(-5)
                setTitleYPosition(3)
            }
        }
        handleResize()
        // return () => handleResize
    }, [width])

    return {titleSize, titleXPosition, titleYPosition}
}

