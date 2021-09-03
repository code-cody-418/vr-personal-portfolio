import React, {useEffect, useState} from "react";

// A responsive hook that returns sizes and positions as a number for 3D objects to be mobile Responcive


export const useResponsive3d = () => {

    //This is the window Width in which responsive behavior will occur
    const breakpoint = 620

    //setWidth is the current windows width in px
    const [width, setWidth] = useState(window.innerWidth)

    //these states change based on the breakpoints
    //variables for the title page
    const [titleSize, setTitleSize] = useState(5)
    const [titleXPosition, setTitleXPosition] = useState(-9)
    const [titleYPosition, setTitleYPosition] = useState(6)

    //variables for the skills section
    const [skillsTitleSize, setSkillsTitleSize] = useState(5)
    const [skillsTitleXPosition, setSkillsTitleXPosition] = useState(20)
    const [skillsTitleYPosition, setSkillsTitleYPosition] = useState(7)
    const [skillsTitleZPosition, setSkillsTitleZPosition] = useState(-15)


    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", handleWindowResize)
    }, [width, titleSize])

    useEffect(() => {
        const handleResize = () => {
            if (breakpoint < width) {
                //set title
                setTitleSize(5)
                setTitleXPosition(-9)
                setTitleYPosition(6)
                //set skills
                setSkillsTitleSize(5)
                setSkillsTitleXPosition(20)
                setSkillsTitleYPosition(7)
            } else if (breakpoint > width) {
                //set title
                setTitleSize(3)
                setTitleXPosition(-5)
                setTitleYPosition(3)
                //set skills
                setSkillsTitleSize(2)
                setSkillsTitleXPosition(20)
                setSkillsTitleYPosition(7)
                setSkillsTitleZPosition(-6)
            }
        }
        handleResize()
        // return () => handleResize
    }, [width])

    return {
        titleSize,
        titleXPosition,
        titleYPosition,
        skillsTitleSize,
        skillsTitleXPosition,
        skillsTitleYPosition,
        skillsTitleZPosition
    }
}

