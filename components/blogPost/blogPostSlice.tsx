import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk, AppDispatch } from '../redux/store'

interface BlogPost {
    id: number,
    body: string,
    title: string, 
}

const initialState : BlogPost[] = [];

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state, action: PayloadAction<BlogPost>) {
            state.push(action.payload);
        }
    }
});

export const addPost = (
    title: string, body: string
): AppThunk => async (dispatch: AppDispatch) => {
    const options = {
        headers: {"Content-Type": "application/json"}
    }
    const post = JSON.stringify({ "title": title?title:"", "body": body?body:"" })
    
    const {data} : BlogPost = await axios.post("https://simple-blog-api.crew.red/posts", post, options)
    console.log(data)
    dispatch(postSlice.actions.addPost(data))
}

export default postSlice.reducer;  