import { createSlice } from "@reduxjs/toolkit";

const foodOrderSlice = createSlice({
    name: 'foodOrder',
    initialState: [],

    reducers: {
      setOrders: (state, action) =>{
        return action.payload
      },
     
      updateOrder: (state, action)=> {
        const orderArr = state.map((order)=> {
        if (order.id === action.payload.id){
          return action.payload
        } else {
          return order
        }
        })
        return orderArr

      },
    
    }
})

export const {setOrders, updateOrder} = foodOrderSlice.actions

export default foodOrderSlice.reducer