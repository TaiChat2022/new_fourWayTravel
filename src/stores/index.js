import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/slice';
import uiSlice from './ui/slice';

export const store = configureStore({
	reducer: {
		[authSlice.name]: authSlice.reducer,
		[uiSlice.name]: uiSlice.reducer,
	},
	middleware: (getDMW) =>
		getDMW({
			serializableCheck: false,
		}),
});
