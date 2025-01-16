import {useEffect, useState} from "react";

export type WindowSize = "small" | "medium" | "large" | "extra-large"

function getWindowSize(width: number): WindowSize {
    if (width < 600) {
        return "small"
    } else if (width < 900) {
        return "medium"
    } else if (width < 1200) {
        return "large"
    } else {
        return "extra-large"
    }
}


const useMediaSize = () => {

    const [size, setSize] = useState<WindowSize>(getWindowSize(window.innerWidth))

    useEffect(() => {
        const handleResize = () => {
            setSize(getWindowSize(window.innerWidth))
        };
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return size

}

export default useMediaSize