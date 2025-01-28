import "./Star.css"
import React, {useState} from "react";
import StarText from "./StarText.tsx";
import {Coordinate} from "./ContentContainer.tsx";

interface StarProps {
    top: number
    left: number
    size: number
    text: string
}

const Star: React.FC<StarProps> = (props: StarProps) => {

    const [showStar, setShowStar] = useState(false)
    const [coords, setCoords] = useState<Coordinate>({x:0,y:0})

    const onClose = () => {
        console.log("onClose")
        setShowStar(false)
        setCoords({x:0,y:0})
    }

    return (
        <>
            <div
                className={"star-box"}
                style={{
                    top: `${props.top}px`,
                    left: `${props.left}px`
                }}
                onClick={(event) => {
                    setShowStar(!showStar)
                    setCoords({x: event.clientX, y: event.clientY})
                }}
            >
                <div className={"star"}
                     style={{
                         height: `${props.size}px`,
                         width: `${props.size}px`,
                     }}
                >
                    <div
                        className={"star-glow"}
                        style={{
                            height: `${props.size}px`,
                            width: `${props.size}px`,
                        }}
                    ></div>
                </div>
            </div>
            <StarText text={props.text} visible={showStar} location={coords} onClose={onClose} />
        </>

    )
}

export default Star