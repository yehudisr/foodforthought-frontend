import {  createSlice } from "@reduxjs/toolkit";

const giverSlice = createSlice({
    name: 'giver',
  initialState: JSON.parse(localStorage.getItem('currentGiver')) || null,
  reducers: {
    setGiver(state, action){
        // console.log("state", state, action)
       return state = action.payload
        // console.log(state)
    }
  //   setListings: (state, action) =>{
  //     return action.payload
      
  //  },
  //  addListing: (state, action) => {
  //      state.food_listings.push(action.payload)
  //  },
  //  removeListing: (state, action) => {
  //      const fl = state.giver
  //      const updated = fl.filter(listing => listing.id !== action.payload.id)
  //      return updated
       
  //  },
  //  updateListing: (state, action)=> {
  //    const request = state.find(request => request.id === action.payload.id)
     
  //  }
  }
})

export const {setGiver} = giverSlice.actions
export default giverSlice.reducer
