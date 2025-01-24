import "./ContentContainer.css"
import Star from "./Star.tsx";
import Connector from "./Connector.tsx";
import useMediaSize, {WindowSize} from "../../hooks/useMediaSize.tsx";

interface Coordinate {
    x: number
    y: number
}

function getCoordinates(windowSize: WindowSize): Coordinate[] {
    switch (windowSize) {
        case "xs":
            return []
        case "small":
            return []
        case "medium":
            return []
        case "large":
            return []
        case "extra-large":
            return [
                {x: 200, y: 200},
                {x: 650, y: 100},
                {x: 350, y: 600},
                {x: 1150, y: 100},
                {x: 900, y: 70},
                {x: 800, y: 400},
                {x: 875, y: 700},
                {x: 1125, y: 600}
            ]
    }
}

const ContentContainer = () => {

    const windowSize = useMediaSize();
    const coordinates = getCoordinates(windowSize);

    const Stars = coordinates.map(coords => {
        return(
            <Star top={coords.y} left={coords.x} size={Math.random() * 3 + 3} text={""}/>
        )
    })
    const Tee = () => {
        const [x1, y1, x2, y2, x3, y3] = [
            coordinates[0].x,
            coordinates[0].y,
            coordinates[1].x,
            coordinates[1].y,
            coordinates[2].x,
            coordinates[2].y,
        ];
        const fakeX = x1 + (x2 - x1) / 2
        const fakeY = y1 + (y2 - y1) / 2
        return (
            <>
                <Connector
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                />
                {/*Half point to */}
                <Connector
                    x1={fakeX}
                    y1={fakeY}
                    x2={x3}
                    y2={y3}
                />
            </>

        )
    }

    console.log(coordinates.slice(3, 8))
    const ceeMap = coordinates.slice(3, 8)

    const C = ceeMap.map((coord, index) => {
        if (index != 0) {
            return (
                <Connector
                    x1={ceeMap[index - 1].x}
                    y1={ceeMap[index - 1].y}
                    x2={coord.x}
                    y2={coord.y}
                />
            )
        }
        else {
            return <></>
        }
    })

    return (
        <div id={"content"} className={"content"}>
            {Stars}
            <Tee/>
            {C}
        </div>
    )

}

export default ContentContainer