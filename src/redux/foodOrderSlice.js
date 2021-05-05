import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    entities: [], 
    status: "idle"
  }

const foodOrderSlice = createSlice({
    name: 'foodOrder',
    initialState,

    reducers: {
      setOrders: (state, action) =>{
        return action.payload
      },
     
      updateOrder: (state, action)=> {
          console.log(state.entities, "state")
        const order = state.entities.find((order)=> order.id === action.payload.id)
        // order.amount = action.payload
        // return listing.amount = action.payload
      },
    
    }
})

export const {setOrders, updateOrder} = foodOrderSlice.actions

export default foodOrderSlice.reducer