import {useEffect, useState} from "react";

export type WindowSize = "xs" | "small" | "medium" | "large" | "extra-large"

function getSize(width: number): WindowSize {
    if (width < 400) {
        return "xs"
    } else if (width < 600) {
        return "small"
    } else if (width < 900) {
        return "medium"
    } else if (width < 1200) {
        return "large"
    } else {
        return "extra-large"
    }
}

const useWindowSize = () => {

    const [size, setSize] = useState<WindowSize>(getSize(window.innerWidth))

    useEffect(() => {
        const handleResize = () => {
            setSize(getSize(window.innerWidth))
        };
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return size

}

export default useWindowSize