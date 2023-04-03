import { createSlice } from "@reduxjs/toolkit";

const initialValue = [];

const pubSlice = createSlice({
  name:"publish",
  initialState: {value:{pub:initialValue}},
  reducers:{
    publishing:(state,actions)=>{
      state.value.pub = actions.payload
    },
  }
})

export const {publishing} = pubSlice.actions;
export default pubSlice.reducer;