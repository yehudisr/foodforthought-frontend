import { configureStore } from '@reduxjs/toolkit'
import giverReducer from './giverSlice'
import receiverReducer from './receiverSlice'

export default configureStore({
    reducer: {
        giver: giverReducer,
        receiver: receiverReducer,
        // listings: listingReducer,
        // orders: orderReducer
    }
  })
  