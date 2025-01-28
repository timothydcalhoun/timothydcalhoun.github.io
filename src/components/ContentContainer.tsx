import "./ContentContainer.css"
import Star from "./Star.tsx";
import Connector from "./Connector.tsx";
import useMediaSize from "../../hooks/useMediaSize.tsx";

export interface Coordinate {
    x: number
    y: number
}

const StarText: string[] = [
    "At CIG I cross-functionally directed and implemented a web application for \n" +
    "navigating internal project structures, all the way from inception to delivery.",
    "I authored over 100 improvements to our internal web \n" +
    "application and created custom libraries to meet the needs of the team, \n" +
    "providing consequential time and cost savings.",
    "I discovered my interest in web development while in another career \n" +
    "and endeavored to pursue it despite significant personal risk and \n" +
    "expense.",
    "My time spent in other fields has provided me with a unique \n" +
    "combination of experience and soft skills that other programmers \n" +
    "likely do not possess. ",
    "I excel at communicating and refining goals, standards, and \n" +
    "objectives.  These skills have been developed through conducting \n" +
    "training courses, working with clients and developers, and writing \n" +
    "extensive, high impact technical guidance documentation.",
    "I’m constantly searching for optimization opportunities and do not \n" +
    "limit myself purely to my job description.  If I see something that can \n" +
    "be improved, I just do it (after approval from supervisors, of course).",
    "If a project or task lacks leadership, I grab the reins.  Not out of \n" +
    "desire, but out of necessity.  I do what needs to be done to achieve \n" +
    "the goal.",
    "I’m a straight shooter that tells it like it is.  I’m not interested in living \n" +
    "in an echo chamber.  If the status quo needs to be challenged, I \n" +
    "challenge it. But I do so purely out of a desire to get things right, and \n" +
    "I do it with respect and curiosity, not with defiance. ",
    "Written letters from former supervisors validate the above \n" +
    "statements and highlight my work ethic and dedication to my \n" +
    "organization.",
    "I’m not just looking for another job, I’m looking for a career through which I \n" +
    "can grow, develop, and become a vital cog in a well-oiled machine."
]

const TeeRatios: Coordinate[] = [
    {x: .15, y: .25},
    {x: .45, y: .2},
    {x: .25, y: .7}
]

const CeeRatios: Coordinate[] = [
    {x: .75, y: .2},
    {x: .65, y: .17},
    {x: .55, y: .25},
    {x: .51, y: .48},
    {x: .55, y: .7},
    {x: .65, y: .74},
    {x: .75, y: .68},
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
                key={i}
                top={coords.y}
                left={coords.x}
                size={Math.random() * 5 + 3}
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
                    key={`${x1}${y1}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                />
                {/*Half point to */}
                <Connector
                    key={`${fakeX}${fakeY}`}
                    x1={fakeX}
                    y1={fakeY}
                    x2={x3}
                    y2={y3}
                />
            </>

        )
    }

    const ceeMap = coordinates.slice(3, 10)

    const C = () => {
        return ceeMap.map((coord, index) => {
            if (index != 0) {
                return (
                    <Connector
                        key={`${ceeMap[index - 1].x}${ceeMap[index - 1].y}`}
                        x1={ceeMap[index - 1].x}
                        y1={ceeMap[index - 1].y}
                        x2={coord.x}
                        y2={coord.y}
                    />
                )
            }
        })
    }

    return (
        <div id={"content"} className={"content"}>
            <p className={"interact"}>Interact with the bright stars to learn more about me!</p>
            <div className={"veil"}/>
            <p className={"web-dev"}>(Not Just Another) Full Stack Web Developer</p>
            <Tee/>
            <C/>
            {Stars}
        </div>
    )

}

export default ContentContainer