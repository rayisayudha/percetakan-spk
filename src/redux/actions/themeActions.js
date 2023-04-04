import {UPDATE_THEME} from "./types";

export const changeTheme = (mode) => async (dispatch) => {
    try {
        localStorage.setItem("theme", mode);
        dispatch({
            type: UPDATE_THEME,
            payload: mode,
        });
    } catch (error) {
        console.log(error);
    }
};
