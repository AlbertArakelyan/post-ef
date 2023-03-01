import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';

// Controllers
import Controller from './Contoller.js';

// Models
import Post from '../models/Post.js';

// Constants
import { postControllerMessages } from '../constants/index.js';


dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_APY_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

class PostController extends Controller {
  static async create(req, res) {
    try {
      const { mainPhoto: image, ...body } = req.body;
      const mainPhoto = await cloudinary.uploader.upload(image);

      const post = new Post({
        ...body,
        mainPhoto: mainPhoto.url,
        userId: req.user.id,
      });

      await post.save();

      res.status(201).json({
        success: true,
        message: postControllerMessages.postCreated,
        data: post,
      });
    } catch (error) {
      super.catchError(error);
      res.status(500).json({
        success: false,
        message: error.message || 'Something went wrong.',
      });
    }
  }

  static async get(req, res) {
    try {
      const { userId } = req.query;

      let posts;

      if (userId) {
        posts = await Post.find({userId}).populate('userId')
      } else {
        posts = await Post.find({}).populate('userId')
      }

      posts.reverse();

      res.status(200).json({
        success: true,
        data: posts,
        message: postControllerMessages.postsGet,
      })
    } catch (error) {
      super.catchError(error);
      res.status(500).json({
        success: false,
        message: error.message || 'Something went wrong.',
      });
    }
  }
}

export default PostController;