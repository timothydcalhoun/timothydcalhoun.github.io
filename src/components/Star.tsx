import "./Star.css"
import React from "react";

interface StarProps {
    top: number
    left: number
    size: number
    text: string
}

const Star: React.FC<StarProps> = (props: StarProps) => {

    return (
        <div
            className={"star-box"}
            style={{
                top: `${props.top}px`,
                left: `${props.left}px`
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
    )
}

export default Star