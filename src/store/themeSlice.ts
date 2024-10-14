// src/store/themeSlice.ts

import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
    darkMode: boolean;
    navOpen: boolean;
}

const initialState: ThemeState = {
    darkMode: false,
    navOpen: false,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
        toggleNavOpen: (state) => {
            state.navOpen = !state.navOpen;
        },
        closeNav: (state) => {
            state.navOpen = false;
        },
    },
});

export const { toggleDarkMode, toggleNavOpen, closeNav } = themeSlice.actions;

export default themeSlice.reducer;
