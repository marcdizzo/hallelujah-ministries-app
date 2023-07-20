import { createSlice } from "@reduxjs/toolkit";

// appApi
import appApi from "../services/appApi";

const initialState = [];

export const devotionSlice = createSlice({
    name: "devotions",
    initialState,
    reducers: {
        updateDevotions: (_, action) => {
            return action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(appApi.endpoints.createDevotion.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.updateDevotion.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(appApi.endpoints.deleteDevotion.matchFulfilled, (_, { payload }) => payload);
    },
});

export const { updateDevotions } = devotionSlice.actions;
export default devotionSlice.reducer;