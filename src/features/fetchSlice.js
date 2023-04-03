import { createSlice } from "@reduxjs/toolkit";


const initValue = [];

const fetchSlice = createSlice({
  name:"fetching",
  initialState: {value:{news:initValue}},
  reducers:{
    fetching:(state,actions) => {
      state.value.news = actions.payload
    },
    popping:(state,actions)=>{
      state.value.news = actions.payload
    },
    switching:(state,actions)=>{
      state.value.news = actions.payload
    }
  }
})

export const {fetching, popping, switching} = fetchSlice.actions;
export default fetchSlice.reducer;
