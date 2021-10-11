import { createSlice } from "@reduxjs/toolkit";

const circleClickedSlice = createSlice({
    name:'circleclicked',
    initialState:{
        circleclicked:true,
    },
    reducers:{
        clicked: (state)=>{
            state.circleclicked = true;
        },
        notClicked: (state)=>{
            state.circleclicked = false;
        }
    }
})

export const {clicked, notClicked} = circleClickedSlice.actions;

export default circleClickedSlice.reducer;

//selector
export const selectClickedState = state => state.circleclicked.circleclicked; 
