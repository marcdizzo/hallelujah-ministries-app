import { createSlice } from "@reduxjs/toolkit";

// appApi
import appApi from "../services/appApi";

const initialState = [];

export const blogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
        updateDevotions: (_, action) => {
            return action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(appApi.endpoints.createBlog.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.updateBlog.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.deleteBlog.matchFulfilled, (_, { payload }) => payload);
    },
});

export const { updateBlogs } = blogSlice.actions;
export default blogSlice.reducer;