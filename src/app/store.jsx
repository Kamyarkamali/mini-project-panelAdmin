import { configureStore } from "@reduxjs/toolkit";

import { reducer } from "../fetchare/reduxSlider";


const store=configureStore({
    reducer:{todo:reducer}
})


export default store;