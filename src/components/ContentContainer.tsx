import "./ContentContainer.css"
import Star from "./Star.tsx";
import Connector from "./Connector.tsx";
import useMediaSize from "../../hooks/useMediaSize.tsx";

export interface Coordinate {
    x: number
    y: number
}

const StarText: string[] = [
    "Star 1",
    "Star 2 text",
    "Star 3 info",
    "Star 4 info",
    "Star 5 info",
    "Star 6 info",
    "Star 7 info",
    "Star 8 info",
]

const TeeRatios: Coordinate[] = [
    {x: .1, y: .25},
    {x: .4, y: .2},
    {x: .2, y: .7}
]

const CeeRatios: Coordinate[] = [
    {x: .8, y: .2},
    {x: .60, y: .25},
    {x: .53, y: .5},
    {x: .6, y: .7},
    {x: .8, y: .65},
]

const ContentContainer = () => {

    const mediaSize = useMediaSize();
    const coordinates: Coordinate[] = [
        ...TeeRatios,
        ...CeeRatios,
    ].map((coord) => {
        return {x: coord.x * mediaSize.width, y: coord.y * mediaSize.height };
    })

    const Stars = coordinates.map((coords, i) => {
        return(
            <Star
                top={coords.y}
                left={coords.x}
                size={Math.random() * 3 + 3}
                text={StarText[i]}
            />
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

    const ceeMap = coordinates.slice(3, 8)

    const C = () => {
        return ceeMap.map((coord, index) => {
            if (index != 0) {
                return (
                    <Connector
                        x1={ceeMap[index - 1].x}
                        y1={ceeMap[index - 1].y}
                        x2={coord.x}
                        y2={coord.y}
                    />
                )
            } else {
                return <></>
            }
        })
    }

    return (
        <div id={"content"} className={"content"}>
            <div className={"veil"}/>
            <p className={"web-dev"}>Full Stack Web Developer</p>
            {Stars}
            <Tee/>
            <C/>
        </div>
    )

}

export default ContentContainer