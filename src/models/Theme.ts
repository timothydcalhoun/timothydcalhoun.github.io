import {setTheme} from "../store/themeSlice.ts";

export enum ThemeType {
    Futuristic = "Futuristic",
    Floral = "Floral",
    // Playful = "Playful",
    // Retro = "Retro"
}

export interface Theme {
    type: ThemeType
    styleSheet: string
    drawerBG: string
    toolbarBG: string
    fontRegular: string
    fontMedium: string
    fontBold: string
}

export const FuturisticTheme: Theme = {
    type: ThemeType.Futuristic,
    styleSheet: "src/models/Themes/futuristic.css",
    drawerBG: "",
    toolbarBG: "",
    fontRegular: "Orbitron-Regular",
    fontMedium: "Orbitron-Medium",
    fontBold: "Orbitron-Bold",
}

export const FloralTheme: Theme = {
    type: ThemeType.Floral,
    styleSheet: "src/models/Themes/floral.css",
    drawerBG: "",
    toolbarBG: "",
    fontRegular: "Orbitron-Regular",
    fontMedium: "Orbitron-Medium",
    fontBold: "Orbitron-Bold",
}

// export const RetroTheme: Theme = {
//     type: ThemeType.Retro,
//     drawerBG: "",
//     toolbarBG: "",
//     fontRegular: "Orbitron-Regular",
//     fontMedium: "Orbitron-Medium",
//     fontBold: "Orbitron-Bold",
// }
//
// export const PlayfulTheme: Theme = {
//     type: ThemeType.Playful,
//     drawerBG: "",
//     toolbarBG: "",
//     fontRegular: "Orbitron-Regular",
//     fontMedium: "Orbitron-Medium",
//     fontBold: "Orbitron-Bold",
// }

export const Themes: Map<string, Theme> = new Map([
    [ThemeType.Futuristic.valueOf(), FuturisticTheme],
    [ThemeType.Floral.valueOf(), FloralTheme],
    // [ThemeType.Retro.valueOf(), RetroTheme],
    // [ThemeType.Playful.valueOf(), PlayfulTheme],
])