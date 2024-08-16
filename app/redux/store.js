
import { configureStore } from '@reduxjs/toolkit';
import collegeReducer from './college.redux';

export const store = configureStore({
	reducer: {
		colleges: collegeReducer,
	},
});
