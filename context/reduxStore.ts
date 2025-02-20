import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'


/**
 * The initial values of states.
 * This object is the initial state of the Redux store.
 *
 * @constant initialState { CounterState } The initial state.
 *
 * @since 1.0.0
 */
const initialState = {
	lightMode: false,
}


/**
 * The slice for the state.
 * This object is the slice for the Redux store to manage the state.
 * It contains the reducer functions to update the state.
 *
 * @constant stateSlice { Slice } The slice for the state.
 *
 * @since 1.0.0
 */
const stateSlice = createSlice({
	name: 'state',
	initialState,
	reducers: {
		setLightMode: (state, action) => {
			state.lightMode = action.payload
		},
		toggleLightMode: (state) => {
			state.lightMode = !state.lightMode
		},
	},
})


/**
 * The Redux store.
 * This object is the Redux store to manage the state.
 *
 * @constant store { Store } The Redux store.
 *
 * @since 1.0.0
 */
export const store = configureStore({
	reducer: stateSlice.reducer,
})


export const { setLightMode, toggleLightMode } = stateSlice.actions
