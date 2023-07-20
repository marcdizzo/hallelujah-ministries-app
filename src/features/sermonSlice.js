import { createSlice } from "@reduxjs/toolkit";

// appApi
import appApi from "../services/appApi";

const initialState = [];

export const sermonSlice = createSlice({
    name: "sermons",
    initialState,
    reducers: {
        updateSermons: (_, action) => {
            return action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(appApi.endpoints.createSermon.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.updateSermon.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.deleteSermon.matchFulfilled, (_, { payload }) => payload);
    },
});

export const { updateSermons } = sermonSlice.actions;
export default sermonSlice.reducer;