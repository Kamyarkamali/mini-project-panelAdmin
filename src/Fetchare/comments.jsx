import { createSlice } from "@reduxjs/toolkit";
import { dataTabale } from "../Components/data/data";

const initialState={
    comments:dataTabale,
    users:[],
}


const commentSlicer=createSlice({
    name:"comment",
    initialState,
    reducers:{
        addComments:(state,action)=>{
            state.users.push(action.payload)
        }
    }
})


export default commentSlicer.reducer;

export const {addComments}=commentSlicer.actions