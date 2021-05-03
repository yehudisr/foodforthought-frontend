import { configureStore } from '@reduxjs/toolkit'
import giverReducer from './giverSlice'
import receiverReducer from './receiverSlice'
import foodListingReducer from './foodListingSlice'

export default configureStore({
    reducer: {
        giver: giverReducer,
        receiver: receiverReducer,
        foodListing: foodListingReducer
        // orders: orderReducer
    }
  })
  