

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchColleges = createAsyncThunk(
	'colleges/fetchColleges',
	async ({ page, filters, sortOrder, name }, { rejectWithValue }) => {
		try {
			const response = await fetch(
				`/api/college?page=${page}&filters=${
					filters || ''
				}&sortOrder=${sortOrder}&name=${name}`,
			);
			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue('Failed to fetch data');
		}
	},
);

const collegeSlice = createSlice({
	name: 'colleges',
	initialState: {
		data: [],
		page: 1,
		hasMore: true,
		filters: null,
		sortOrder: 'asc',
		name: '',
		status: 'idle',
		error: null,
	},
	reducers: {
		setFilters: (state, action) => {
			state.filters = action.payload;
			state.page = 1;
		},
		setSortOrder: (state, action) => {
			state.sortOrder = action.payload;
			state.page = 1;
		},
		setName: (state, action) => {
			state.name = action.payload;
			state.page = 1;
		},
		setPage: (state, action) => {
			state.page = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchColleges.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(fetchColleges.fulfilled, (state, action) => {
				state.status = 'succeeded';
				if (state.page === 1) {
					state.data = action.payload;
				} else {
					state.data = [...state.data, ...action.payload];
				}
				state.hasMore = action.payload.length > 0;
			})
			.addCase(fetchColleges.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
			});
	},
});

export const { setFilters, setSortOrder, setName, setPage } =
	collegeSlice.actions;

export default collegeSlice.reducer;
