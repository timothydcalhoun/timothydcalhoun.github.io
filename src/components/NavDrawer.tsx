import MenuIcon from '@mui/icons-material/Menu';
import "./NavDrawer.css"
import {useState} from "react";
import {Build, MenuOpen, TodayOutlined} from "@mui/icons-material";

const NavDrawer = () => {

    const [drawer, setDrawer] = useState(false)

    const toggleDrawer = () => {
        setDrawer(open => !open)
    }

    const drawerClass = drawer ? "nav-drawer open" : "nav-drawer"

    return (
        <div className={drawerClass}>
            <div className={"menu"}>
                {drawer ?
                    <MenuOpen className={"menu-icon"}
                        onClick={toggleDrawer}
                    /> :
                    <MenuIcon className={"menu-icon"}
                        onClick={toggleDrawer}
                    />
                }
            </div>
            <div className={"menu-items"}>
                <div className={"menu-item"}>
                    <Build className={"menu-item-icon"} sx={{width: "50px"}}/>
                    <a className={"menu-item-text"}>
                        Fake Link
                    </a>
                </div>
                <div className={"menu-item"}>
                    <TodayOutlined className={"menu-item-icon"} sx={{width: "50px"}}/>
                    <a className={"menu-item-text"}>
                        Fake Link
                    </a>
                </div>
            </div>
        </div>
    )

}

export default NavDrawer