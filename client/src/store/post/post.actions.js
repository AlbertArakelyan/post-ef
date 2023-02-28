import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// Action types
import {
  CREATE_POST,
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

      console.log('action/createPost',response.data);
      return response.data.data;
    } catch (error) {
      toast.error(error.message);
      throw error.message;
    }
  },
);