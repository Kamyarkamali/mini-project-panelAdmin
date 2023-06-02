import { configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import dataSlicer from "../Fetchare/prouduts/products";
import commentSlicer from "../Fetchare/comments";

const store=configureStore({
    reducer:{
        users:dataSlicer,
        comments:commentSlicer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

export default store;