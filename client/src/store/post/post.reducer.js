import { createReducer } from '@reduxjs/toolkit';

// Actions
import {
  createPost
} from './post.actions';


const initialState = {
  userPosts: [],
  posts: [],
  create: {
    loading: false,
    error: null,
  },
};

const postReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createPost.fulfilled, (state, action) => {
      state.userPosts.unshift(action.payload);
      state.create.error = null;
      state.create.loading = false;
    })

    .addDefaultCase((state) => state);
});

export default postReducer;