import { createSlice } from "@reduxjs/toolkit"

export const themeSlice = createSlice({
    name: "theme",
    initialState:{
        darkMode: true,
    },
    reducers:{
        toggletheme: (state, action) =>{
            state.darkMode = !state.darkMode;
           console.log('click')
        }
    }
})

export default themeSlice.reducer;
export const selectDarkMode = (state) => state.theme.darkMode;
export const {toggletheme} = themeSlice.actions;