import {  createSlice } from "@reduxjs/toolkit";

const giverSlice = createSlice({
    name: 'giver',
  initialState: JSON.parse(localStorage.getItem('currentGiver')) || null,
  reducers: {
    setGiver(state, action){
        // console.log("state", state, action)
       return state = action.payload
        // console.log(state)
    },
  }
})

export const {setGiver} = giverSlice.actions
export default giverSlice.reducer
