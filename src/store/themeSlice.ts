import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {FuturisticTheme, Theme} from "../models/Theme.ts";

interface State {
    theme: Theme
}

const initialState: State = {
    theme: FuturisticTheme
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState: initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.theme = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions

export default themeSlice.reducer