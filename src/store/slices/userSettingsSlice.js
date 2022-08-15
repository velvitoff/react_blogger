import { createSlice, createSelector } from '@reduxjs/toolkit';
import { themeTokens } from '../../utils/theme/themeTokens';

const initialState = {
    theme: 'light',
    language: 'en'
};

export const userSettingsSlice = createSlice({
    name: 'userSettings',
    initialState,
    reducers: {
        switchThemeToLight: (state) => {
            state.theme = 'light'
        },
        switchThemeToDark: (state) => {
            state.theme = 'dark'
        },
        switchThemeToOpposite: (state) => {
            if (state.theme === 'light')
                state.theme = 'dark'
            else if (state.theme === 'dark')
                state.theme = 'light'
        },
        setLanguage: (state, action) => {
            state.language = action.payload
        }
    }
});

export const {
    switchThemeToLight,
    switchThemeToDark,
    switchThemeToOpposite,
    setLanguage
} = userSettingsSlice.actions;

export const selectThemeName = state => state.userSettings.theme;
export const selectLanguage = state => state.userSettings.language;

export const selectThemeObject = createSelector(
    state => state.userSettings.theme,
    themeName => themeTokens[themeName] || themeTokens.default
);

export default userSettingsSlice.reducer;