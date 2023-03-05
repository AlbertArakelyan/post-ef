import { createReducer } from '@reduxjs/toolkit';

// Actions
import {
  createPost,
  getPosts,
  getPost,
} from './post.actions';


const initialState = {
  userList: [],
  list: [],
  entry: null,
  create: {
    loading: false,
    error: null,
  },
  posts: {
    loading: false,
    error: null,
  },
  post: {
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
    .addCase(getPosts.pending, (state) => {
      state.posts.error = null;
      state.posts.loading = true;
    })

    .addCase(getPost.fulfilled, (state, action) => {
      state.entry = action.payload;
      state.post.loading = false;
      state.post.error = null;
    })
    .addCase(getPost.rejected, (state, action) => {
      state.post.error = action.payload;
      state.post.loading = false;
    })
    .addCase(getPost.pending, (state) => {
      state.post.loading = true;
      state.post.error = null;
    })

    .addDefaultCase((state) => state);
});

export default postReducer;
