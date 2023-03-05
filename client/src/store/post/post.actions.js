import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// Action types
import {
  CREATE_POST,
  GET_POSTS,
  GET_POST,
  DELETE_POST,
  UPDATE_POST,
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

export const getPost = createAsyncThunk(
  GET_POST,
  async (postId) => {
    try {
      const response = await PostService.getPost(postId);

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

export const deletePost = createAsyncThunk(
  DELETE_POST,
  async (postId) => {
    try {
      const response = await PostService.deletePost(postId);

      if (!response.data?.success) {
        throw new Error(response.data.message || 'Something went wrong');
      }

      toast.success(response.data.message);
      return response.data.success;
    } catch (error) {
      toast.error(error.message);
      throw error.message;
    }
  },
);

export const updatePost = createAsyncThunk(
  UPDATE_POST,
  async ({ postId, data }) => {
    try {
      const response = await PostService.updatePost(postId, data);

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
