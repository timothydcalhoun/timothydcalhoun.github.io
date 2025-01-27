import "./Star.css"
import React, {useState} from "react";

interface StarProps {
    top: number
    left: number
    size: number
    text: string
}

const Star: React.FC<StarProps> = (props: StarProps) => {

    const [showStar, setShowStar] = useState(false)
    const show = showStar ? "show" : "hide"

    return (
        <div
            className={"star-box"}
            style={{
                top: `${props.top}px`,
                left: `${props.left}px`
            }}
            onClick={() => setShowStar(!showStar)}
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
            <div className={`star-text-container ${show}`}>
                <span className={"star-text"}>
                    {props.text}
                </span>
            </div>
        </div>
    )
}

export default Star