import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// Action types
import {
  CREATE_POST,
  GET_POSTS,
} from './post.actionTypes';

// Services
import { PostService } from '../../services';


export const createPost = createAsyncThunk(
  CREATE_POST,
  async (data) => {
    try {
      const response = await PostService.createPost(data);

      if (!response.data?.success) {
        throw new Error(response.data.message || 'Something went wrong');
      }

      toast.success(response.data.message);

      return response.data.data;
    } catch (error) {
      toast.error(error.message);
      throw error.message;
    }
  },
);

export const getPosts = createAsyncThunk(
  GET_POSTS,
  async (userId) => {
    try {
      const response = await PostService.getPosts(userId);

      if (!response.data?.success) {
        throw new Error(response.data.message || 'Something went wrong');
      }

      return response.data.data;
    } catch (error) {
      toast.error(error.message);
      throw error.message;
    }
  },
);