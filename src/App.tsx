import './App.css'
import NavDrawer from "./components/NavDrawer.tsx";
import ContentContainer from "./components/ContentContainer.tsx";
import TitleBar from "./components/TitleBar.tsx";
import "./fonts/fonts.css"
import {useAppSelector} from "./hooks.ts";
import {ThemeType} from "./models/Theme.ts";
import {useEffect, useLayoutEffect} from "react";
import {StyledEngineProvider} from "@mui/material";

function updateStyles(themeType: ThemeType) {
    document.getElementById('theme-link')!
        .setAttribute('href', `src/models/Themes/${themeType.toLowerCase()}.css`);
}

function App() {

    const appTheme = useAppSelector(state => state.theme).theme

    // useLayoutEffect runs synchronously after the DOM has been updated but before the browser paints
    //  triggers whenever the theme changes and replaces the active stylesheet
    //  containing the global variables for each theme
    useLayoutEffect(() => {
        console.log("got here")
        const element = document.getElementById('theme-link')
        if (element) {
            element.setAttribute('href', appTheme.styleSheet);
        }
        else {
            const link = document.createElement("link")
            link.id = "theme-link"
            link.rel = "stylesheet"
            link.href = appTheme.styleSheet
            document.head.appendChild(link)
        }
    }, [appTheme])

    return (
        <StyledEngineProvider injectFirst={true}>
            <NavDrawer/>
            <TitleBar/>
            <ContentContainer/>
        </StyledEngineProvider>
    )
}

export default App
