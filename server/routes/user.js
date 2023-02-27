import express from 'express';
import * as dotenv from 'dotenv';

// Controllers
import UserController from '../controllers/User.js';


dotenv.config();

const userRouter = express.Router();

userRouter.route('/sign-up').post(UserController.signUp);
userRouter.route('/sign-in').post(UserController.signIn);
userRouter.route('/verify-email/:token').get(UserController.verifyEmail);
userRouter.route('/forgot-password').post(UserController.forgotPassword);
userRouter.route('/reset-password').post(UserController.resetPassword);

export default userRouter;