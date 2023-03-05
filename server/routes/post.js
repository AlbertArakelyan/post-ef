import express from 'express';
import * as dotenv from 'dotenv';

// Middlewares
import auth from '../middlawares/auth.js';

// Controllers
import PostController from '../controllers/Post.js';


const postRouter = express.Router();

postRouter.post('/', auth, PostController.create);
postRouter.get('/', auth, PostController.get);
postRouter.get('/:id', auth, PostController.getById);
postRouter.delete('/:id', auth, PostController.delete);

export default postRouter;
