import { createSlice } from "@reduxjs/toolkit";

const initialValue = false;

const searchSlice = createSlice({
  name: "search",
  initialState: {value:{search:initialValue}},
  reducers:{
    searching:(state, actions)=>{
      state.value.search = actions.payload
    }
  }
})

export const {searching} = searchSlice.actions;
export default searchSlice.reducer;