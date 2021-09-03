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

    //variables for the skills title section
    const [skillsTitleSize, setSkillsTitleSize] = useState(5)
    const [skillsTitleXPosition, setSkillsTitleXPosition] = useState(20)
    const [skillsTitleYPosition, setSkillsTitleYPosition] = useState(7)
    const [skillsTitleZPosition, setSkillsTitleZPosition] = useState(-15)

    //variables for the skills text section
    const [skillsTextSize, setSkillsTextSize] = useState(1.5)
    const [skillsTextXPosition, setSkillsTextXPosition] = useState(0)
    const [skillsTextYPosition, setSkillsTextYPosition] = useState(0)
    const [skillsTextZPosition, setSkillsTextZPosition] = useState(-15)
    const [skillsIconSize, setSkillsIconSize] = useState(12)
    const [skillsIconZPositionSize, setSkillsIconZPositionSize] = useState(5)


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
                //set skills title
                setSkillsTitleSize(5)
                setSkillsTitleXPosition(20)
                setSkillsTitleYPosition(7)
                //set skills text
                setSkillsTextSize(1.5)
                setSkillsTextXPosition(0)
                setSkillsTextYPosition(0)
                setSkillsTextZPosition(-15)
                setSkillsIconSize(12)
                setSkillsIconZPositionSize(5)
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
                //set skills text
                setSkillsTextSize(1.5)
                setSkillsTextXPosition(0)
                setSkillsTextYPosition(0)
                setSkillsTextZPosition(-8)
                setSkillsIconSize(6)
                setSkillsIconZPositionSize(5)
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
        skillsTitleZPosition,
        skillsTextSize,
        skillsTextXPosition,
        skillsTextYPosition,
        skillsTextZPosition,
        skillsIconSize,
        skillsIconZPositionSize
    }
}

