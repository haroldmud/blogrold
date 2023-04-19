import { createSlice } from "@reduxjs/toolkit";

const initialValue = [];
const submitSlice = createSlice({
  name:'submit',
  initialState:{value:{submit:initialValue}},
  reducers:{
    submitting :(state, actions)=>{
      state.value.submit = actions.payload
    }
  }
})

export const {submitting } = submitSlice.actions
export default submitSlice.reducer