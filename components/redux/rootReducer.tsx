import { combineReducers } from '@reduxjs/toolkit'

import posts from '../blogPost/blogPostSlice'

const rootReducer = combineReducers({posts})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer