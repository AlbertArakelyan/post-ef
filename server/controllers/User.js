import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Controllers
import Controller from './Contoller.js';

// Models
import User from '../models/User.js';

// Utils
import { transporter } from '../utils/index.js'

// Constants
import { userControllerMessages } from '../constants/index.js';


class UserController extends Controller {
  static async signUp(req, res) {
    try {
      const {
        username,
        email,
        password,
      } = req.body;

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: userControllerMessages.userAlreadyExists,
        });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({
        username,
        email,
        password: hashedPassword,
        isEmailVerified: false,
      });

      const token = jwt.sign({
        userId: user._id
      }, 'Tatev'); // TODO move to env

      const verificationUrl = `http://localhost:3000/verify-email/${token}`; // TODO move to env

      const mailOptions = {
        from: 'albertarakelyan1998@gmail.com',
        to: email,
        subject: 'Please verify your email',
        html: `Please click this link to verify your email: <a href="${verificationUrl}">${verificationUrl}</a>`
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      await user.save();

      res.status(201).json({
        success: true,
        data: {
          email,
        },
        message: userControllerMessages.verifyEmail,
      });
    } catch (error) {
      super.catchError(error);
      res.status(500).json({
        success: false,
        message: error.message || 'Something went worng',
      });
    }
  }

  static async verifyEmail(req, res) {
    try {
      const token = req.params.token;
      const { userId } = jwt.verify(token, 'Tatev'); // TODO move to env

      const user = await User.findById(userId);
      user.isEmailVerified = true;
      await user.save();

      res.status(200).json({
        success: true,
        data: {
          token,
        },
        message: 'Email verified successfully.',
      });
    } catch (error) {
      super.catchError(error);
      res.status(500).json({
        success: false,
        message: error.message || 'Something went worng',
      });
    }
  }

  static async signIn(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          success: false,
          message: userControllerMessages.invalidEmailOrPass, 
        });
      }

      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if (!isPasswordCorrect) {
        return res.status(400).json({
          success: false,
          message: userControllerMessages.invalidEmailOrPass, 
        });
      }

      const accessToken = jwt.sign({
        email,
        id: user._id,
        username: user.username,
      }, 'Tatev'); // TODO move to env

      const userData = {
        email,
        id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        photoPath: user.photoPath,
      };

      res.status(200).json({
        success: true,
        message: userControllerMessages.successLogin,
        data: {
          accessToken,
          user: userData,
        },
      });
    } catch (error) {
      super.catchError(error);
      res.status(500).json({
        success: false,
        message: error.message || 'Something went worng',
      });
    }
  }
}

export default UserController;