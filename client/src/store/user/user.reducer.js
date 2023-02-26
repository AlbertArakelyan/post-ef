import { createReducer } from '@reduxjs/toolkit';
import store from 'store';

// Actions
import {
  signUp,
  verifyEmail,
  signIn,
} from './user.actions';


const initialState = {
  accessToken: store.get('access_token'),
  user: store.get('user'),
  isVerificationPassed: null,
  verificationData: null,
  loading: false,
  error: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(verifyEmail.fulfilled, (state) => {
      state.isVerificationPassed = true;
    })
    .addCase(verifyEmail.rejected, (state) => {
      state.isVerificationPassed = false;
    })

    .addCase(signUp.fulfilled, (state, action) => {
      state.verificationData = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(signUp.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(signUp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.loading = false;
    })
    .addCase(signIn.pending, (state) => {
      state.loading = true;
    })
    .addCase(signIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    .addDefaultCase((state) => state);
});

export default userReducer;