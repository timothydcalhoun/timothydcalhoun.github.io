import './App.css'
import NavDrawer from "./components/NavDrawer.tsx";
import ContentContainer from "./components/ContentContainer.tsx";
import TitleBar from "./components/TitleBar.tsx";
import "./fonts/fonts.css"
import {StyledEngineProvider} from "@mui/material";

function App() {

    return (
        <StyledEngineProvider injectFirst={true}>
            <NavDrawer/>
            <TitleBar/>
            <ContentContainer/>
        </StyledEngineProvider>
    )
}

export default App
