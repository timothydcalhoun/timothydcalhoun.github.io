import "./TitleBar.css"
import {ArticleOutlined, EmailOutlined} from "@mui/icons-material";
import {Tooltip} from "@mui/material";
import useMediaSize from "../../hooks/useMediaSize.tsx";
import Resume from "../assets/Tim Calhoun Resume.pdf"

const TitleBar = () => {

    // const popper = (props: PopperProps) => {
    //
    //     return (
    //         <Popper {...props} sx={sx}>
    //
    //         </Popper>
    //     )
    // }

    const windowSize = useMediaSize();
    
    return (
        <div className={"title-bar"}>
            <div className={"toolbar-content"}>
                <div className={`toolbar-content-left ${windowSize}`}/>
                <div className={"toolbar-content-middle"}>
                    <h2 className={"name"}>Timothy Calhoun</h2>
                </div>
                <div className={"toolbar-content-spacer"}/>
                <div className={`toolbar-content-right ${windowSize}`}>
                    <div className={"toolbar-content-icon"}>
                        <Tooltip
                            // open={true}
                            title={"Résumé"}
                        >
                            <a className={"toolbar-icon"} href={Resume} target={"_blank"}>
                                <ArticleOutlined/>
                            </a>
                        </Tooltip>
                    </div>
                    <div className={"toolbar-content-icon"}>
                        <Tooltip
                            title={"LinkedIn"}
                        >
                            <a className={"toolbar-icon"} href={"https://www.linkedin.com/in/timothy-calhoun"} target={"_blank"}>
                                in
                            </a>
                        </Tooltip>
                    </div>
                    <div className={"toolbar-content-icon"}>
                        <Tooltip
                            title={"timothydcalhoun@gmail.com"}
                        >
                            <a className={"toolbar-icon"} href={"mailto:timothydcalhoun@gmail.com"} target={"_blank"}>
                                <EmailOutlined/>
                            </a>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className={"toolbar-styling"}>
                <div className={`toolbar-styling-left ${windowSize}`}/>
                <div className={"toolbar-styling-middle"}/>
                <div className={"toolbar-styling-spacer"}/>
                <div className={`toolbar-styling-right ${windowSize}`}/>
            </div>

        </div>
    )

}

export default TitleBar