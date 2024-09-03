import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartIsVisible: false,
};

const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		toggle: (state) => {
			state.cartIsVisible = !state.cartIsVisible;
		},
	},
});

// these exports should stay the way they are
export const uiActions = uiSlice.actions;

export default uiSlice;
