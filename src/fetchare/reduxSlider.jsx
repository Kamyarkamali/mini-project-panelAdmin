import { createSlice} from "@reduxjs/toolkit";

const initialState=[];

export const addTodoReducer=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload)
            return state
        },
        removeItem:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload)
        }
    }
})

export const {addTodo,removeItem}=addTodoReducer.actions;

export const reducer=addTodoReducer.reducer;