import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import store from 'store';
import { toast } from 'react-toastify';

// Action Types
import {
  SIGN_UP,
  VERIFY_EMAIL,
  SIGN_IN,
  FORGOT_PASSWORD,
  RESET_PASSWORD, LOG_OUT,
} from './user.actionTypes';

// Services
import { UserService } from '../../services';


export const signUp = createAsyncThunk(
  SIGN_UP,
  async (data) => {
    try {
      const response = await UserService.signUp(data);

      if (!response.data?.success) {
        throw new Error(response.data.message || 'Something went wrong');
      }

      return response.data.data;
    } catch (error) {
      toast.error(error.message);
      throw error.message;
    }
  }
);

export const verifyEmail = createAsyncThunk(
  VERIFY_EMAIL,
  async (token) => {
    try {
      const response = await UserService.verifyEmail(token);

      if (!response.data?.success) {
        throw new Error(response.data.message || 'Something went wrong');
      }
    } catch (error) {
      toast.error(error.message);
      throw error.message;
    }
  }
);

export const signIn = createAsyncThunk(
  SIGN_IN,
  async (data) => {
    try {
      const response = await UserService.signIn(data);

      if (!response.data?.success) {
        throw new Error(response.data.message || 'Something went wrong');
      }

      store.set('access_token', response.data.data.accessToken);
      store.set('user', response.data.data.user);

      return response.data.data;
    } catch (error) {
      toast.error(error.message);
      throw error.message;
    }
  },
);

export const forgotPassword = createAsyncThunk(
  FORGOT_PASSWORD,
  async (data) => {
    try {
      const response = await UserService.forgotPassword(data);

      if (!response.data?.success) {
        throw new Error(response.data.message || 'Something went wrong.');
      }

      return response.data.data;
    } catch (error) {
      toast.error(error.message);
      throw error.message;
    }
  },
);

export const resetPassword = createAsyncThunk(
  RESET_PASSWORD,
  async (data) => {
    try {
      const response = await UserService.resetPassword(data);

      if (!response.data?.success) {
        throw new Error(response.data.message || 'Something went wrong.');
      }

      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
      throw error.message;
    }
  }
);

export const logOut = createAction(LOG_OUT);
