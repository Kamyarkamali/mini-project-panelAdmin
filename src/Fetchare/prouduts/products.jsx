import { createSlice } from "@reduxjs/toolkit";
import data from "../../Components/data/data";

const initialState={
    loading:false,
    products:data,
    users:[],
    error:""
}


const dataSlicer=createSlice({
    name:"users",
    initialState,
    reducers:{
        addUsers:(state,action)=>{
            state.products.push(action.payload)
        }
    }
})


export default dataSlicer.reducer

export const {addUsers}=dataSlicer.actions;
