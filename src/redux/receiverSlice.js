import {  createSlice } from "@reduxjs/toolkit";

const receiverSlice = createSlice({
    name: 'receiver',
  initialState: JSON.parse(localStorage.getItem('currentReceiver')) || null,
  reducers: {
    setReceiver(state, action){
        // console.log("state", state, action)
       return state = action.payload
        // console.log(state)
    },
  }
})

export const {setReceiver} = receiverSlice.actions
export default receiverSlice.reducer
