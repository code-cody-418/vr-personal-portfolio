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

    //variables for the Projects title section
    const [projectsTitleSize, setProjectsTitleSize] = useState(5)
    const [projectsTitleXPosition, setProjectsTitleXPosition] = useState(-20)
    const [projectsTitleYPosition, setProjectsTitleYPosition] = useState(7)
    const [projectsTitleZPosition, setProjectsTitleZPosition] = useState(10)

    //variables for the Projects text section
    const [projectsTextSize, setProjectsTextSize] = useState(2.5)
    const [projectsTextXPosition, setProjectsTextXPosition] = useState(0)
    const [projectsTextYPosition, setProjectsTextYPosition] = useState(0)
    const [projectsTextZPosition, setProjectsTextZPosition] = useState(0)
    const [projectsExampleSize, setProjectsExampleSize] = useState(14)
    const [projectsExampleZPosition, setProjectsExampleZPosition] = useState(18)
    const [projectsExampleYPosition, setProjectsExampleYPosition] = useState(0)
    const [projectsExampleYRotation, setProjectsExampleYRotation] = useState(2.3)


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
                //set projects title
                setProjectsTitleSize(5)
                setProjectsTitleXPosition(-20)
                setProjectsTitleYPosition(7)
                setProjectsTextZPosition(10)
                //set projects text
                setProjectsTextSize(2.5)
                setProjectsTextXPosition(0)
                setProjectsTextYPosition(0)
                setProjectsTextZPosition(0)
                setProjectsExampleSize(14)
                setProjectsExampleZPosition(18)
                setProjectsExampleYPosition(0)
                setProjectsExampleYRotation(2.3)
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
                //set projects title
                setProjectsTitleSize(3.5)
                setProjectsTitleXPosition(-20)
                setProjectsTitleYPosition(11)
                setProjectsTitleZPosition(7.5)
                //set projects text
                setProjectsTextSize(1.5)
                setProjectsTextXPosition(0)
                setProjectsTextYPosition(5)
                setProjectsTextZPosition(-2)
                setProjectsExampleSize(14)
                setProjectsExampleZPosition(0)
                setProjectsExampleYPosition(-6)
                setProjectsExampleYRotation(1.570796)
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
        skillsIconZPositionSize,
        projectsTitleSize,
        projectsTitleXPosition,
        projectsTitleYPosition,
        projectsTitleZPosition,
        projectsTextSize,
        projectsTextXPosition,
        projectsTextYPosition,
        projectsTextZPosition,
        projectsExampleSize,
        projectsExampleZPosition,
        projectsExampleYPosition,
        projectsExampleYRotation
    }
}

