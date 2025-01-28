import React from "react";
import {Coordinate} from "./ContentContainer.tsx";
import {Cancel, CancelOutlined} from "@mui/icons-material";
import "./StarText.css"
import useMediaSize from "../../hooks/useMediaSize.tsx";

interface Props {
    visible: boolean
    text: string;
    location: Coordinate;
    onClose: () => void;
}

const StarText: React.FC<Props> = (props: Props) => {

    const mediaSize = useMediaSize();
    let x: number
    let y: number
    if (mediaSize.width < 900 || mediaSize.height < 600) {
        x = (mediaSize.width - 50) / 2
        y = (mediaSize.height - 60) / 2
    } else {
        x = props.location.x - 50;
        y = props.location.y - 60;
    }

    return (
        props.visible &&
            <div
                className={`star-text-container`}
                style={{
                    top: `${y}px`,
                    left: `${x}px`,
                }}
            >
                <span className={"star-text"}>
                    {props.text}
                </span>
                <CancelOutlined className={"star-text-close"} onClick={props.onClose}/>
            </div>

    )
}

export default StarText