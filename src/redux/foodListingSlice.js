import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useSelector } from "react"


const foodListingSlice = createSlice({
    name: 'foodListing',
    initialState: [],

    // initialState: JSON.parse(localStorage.getItem('giverFoodListings')) || null,
    reducers: {
      setListings: (state, action) =>{
        
        return action.payload
        
      },
      addListing: (state, action) => {
          state.push(action.payload)
      },
      removeListing: (state, action) => {
          
          const updated = state.filter(listing => listing.id !== action.payload.id)
          return updated
      },
      updateListing: (state, action)=> {
        const listing = state.find(listing => listing.id === action.payload.id)
      },
      // updateAmount: (state, action) => {

      // }
    }
})

export const {setListings, addListing, removeListing, updateListing} = foodListingSlice.actions

export default foodListingSlice.reducer

