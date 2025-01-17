import ThemeSelect from "./ThemeSelect.tsx";
import useMediaSize from "../../hooks/useMediaSize.tsx";
import imgUrl from "/src/assets/futuristic-image.png"

const Card = () => {

    const windowSize = useMediaSize()
    console.log(windowSize)

    const CardText = () => {
        return (
            <div className={"card-right"}>
                <h3 className={`card-text header ${windowSize}`}>
                    Full Stack Web Developer
                </h3>
                <p className={`card-text body ${windowSize}`}>
                    Because my work at CIG is locked behind an NDA, I created a brief demo
                    showcasing my abilities. This is not at all comprehensive, and is a work in progress.
                </p>
                <p className={`card-text caption ${windowSize}`}>
                    The project is organized and scaffolded with Theming and Global State Management
                    such that it can grow into a much larger application,
                    and is responsive to both large and small screen sizes.
                </p>
            </div>
        )
    }

    if (windowSize === "small" || windowSize === "medium") {
        return (
            <div id={"card-no-image"} className={"card-no-image"}>
                <CardText/>
            </div>
        )
    } else {
        return (
            <div id={"card"} className={`card ${windowSize}`}>
                <div className={"card-left"}>
                    <img className={"card-img"} alt={"futuristic"} src={`${imgUrl}`} />
                </div>
                <CardText/>
            </div>
        )
    }

}

export default Card