import { createSlice } from "@reduxjs/toolkit";


const initialState = ['hjdshj'];

const listSlice = createSlice({
  name: 'articles',
  initialState: {value:{list:initialState}},
  reducers:{
    listing:(state,actions)=>{
      state.value.list = actions.payload
    }
  }
})

export const {listing} = listSlice.actions;
export default listSlice.reducer;
