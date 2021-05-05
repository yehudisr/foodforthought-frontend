import { configureStore } from '@reduxjs/toolkit'
import giverReducer from './giverSlice'
import receiverReducer from './receiverSlice'
import foodListingReducer from './foodListingSlice'
import foodOrderReducer from './foodOrderSlice'

export default configureStore({
    reducer: {
        giver: giverReducer,
        receiver: receiverReducer,
        foodListing: foodListingReducer,
        foodOrder: foodOrderReducer
    }
  })
  