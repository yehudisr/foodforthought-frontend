import { createSlice } from "@reduxjs/toolkit";

const foodListingSlice = createSlice({
    name: 'requests',
  initialState: [],
  reducers: {
    setListings: (state, action) =>{
        // console.log("state", state, action)
       return action.payload
        // console.log(state)
    },
    addListing: (state, action) => {
        state.push(action.payload)
    },
    removeListing: (state, action) => {
        
        const updated = state.filter(listing => listing.id !== action.payload.id)
        return updated
    },
    // updateListing: (state, action)=> {
    //   const request = state.find(request => request.id === action.payload.id)
      
    // }
  }
})

export const {setOffers, addOffer, removeOffer} = foodListingSlice.actions
export default foodListingSlice.reducer