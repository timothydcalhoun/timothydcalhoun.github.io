import {useEffect, useState} from "react";

interface MediaSize {
    width: number;
    height: number;
}

const useMediaSize = () => {

    const [size, setSize] = useState<MediaSize>({
        width: window.outerWidth,
        height: window.innerHeight,
    })

    useEffect(() => {
        const handleResize = () => {
            console.log(window.innerWidth, window.innerHeight)
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        };
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return size

}

export default useMediaSize