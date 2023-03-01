import { createReducer } from '@reduxjs/toolkit';

// Actions
import {
  createPost,
  getPosts,
} from './post.actions';


const initialState = {
  userList: [],
  list: [],
  create: {
    loading: false,
    error: null,
  },
  posts: {
    loading: false,
    error: null,
  },
};

const postReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createPost.fulfilled, (state, action) => {
      state.userList.unshift(action.payload);
      state.create.error = null;
      state.create.loading = false;
    })

    .addCase(getPosts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.posts.error = null;
      state.posts.loading = false;
    })
    .addCase(getPosts.rejected, (state, action) => {
      state.posts.error = action.payload;
      state.posts.loading = false;
    })
    .addCase(getPosts.pending, (state, action) => {
      state.posts.error = null;
      state.posts.loading = true;
    })

    .addDefaultCase((state) => state);
});

export default postReducer;