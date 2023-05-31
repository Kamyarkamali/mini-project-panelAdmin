import { configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import dataSlicer from "../Fetchare/prouduts/products";

const store=configureStore({
    reducer:{
        users:dataSlicer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

export default store;