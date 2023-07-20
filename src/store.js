import { configureStore } from "@reduxjs/toolkit";
// import productSlice from "./features/productSlice";
import userSlice from "./features/userSlice";
import appApi from "./services/appApi";
// import counterReducer from './features/counter/counterSlice';

// persit our store
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import sermonSlice from "features/sermonSlice";
import devotionSlice from "features/devotionSlice";
import blogSlice from "features/blogSlice";

//reducers
const reducer = combineReducers({
    // counter: counterReducer,
    user: userSlice,
    sermons: sermonSlice,
    devotions: devotionSlice,
    blogs: blogSlice,
    [appApi.reducerPath]: appApi.reducer,
    
});

const persistConfig = {
    key: "root",
    storage,
    blackList: [appApi.reducerPath, "sermons", "devotions","blogs"],
};

// persist our store
const persistedReducer = persistReducer(persistConfig, reducer);

// creating the store

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, appApi.middleware],
});

export default store;
