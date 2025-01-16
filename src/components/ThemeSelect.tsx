import '../App.css'
import {Themes, ThemeType} from "../models/Theme.ts";
import React from "react";
import {useAppDispatch, useAppSelector} from "../hooks.ts";
import {setTheme} from "../store/themeSlice.ts";
import "./ThemeSelect.css"
import {KeyboardArrowDown} from "@mui/icons-material";

const ThemeSelect = () => {

    const activeTheme = useAppSelector(state => state.theme).theme.type
    const dispatch = useAppDispatch()

    const themes: ThemeType[] = [
        ThemeType.Floral,
        ThemeType.Futuristic,
    ]

    const selectTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault();
        const newTheme = Themes.get(event.target.value)!
        dispatch(setTheme(newTheme))
    }

    return (
        <div className={"select-container"}>
            <select className={"theme-selection"} value={activeTheme} onChange={selectTheme}>
                {themes.map((theme) => (
                    <option key={theme} value={theme}>
                        {theme}
                    </option>
                ))}
            </select>
            <KeyboardArrowDown className={"select-icon"}/>
        </div>
    )
}

export default ThemeSelect
