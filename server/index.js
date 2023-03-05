import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './db.js';

// Routers
import userRouter from './routes/user.js';
import postRouter from './routes/post.js';


dotenv.config();

const app = express();

// Global usages
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Routes
app.use('/api/v1/user', userRouter);
app.use('/api/v1/post', postRouter);

// Connect DB and start server
app.get('/', async (req, res) => {
  res.send('Hello from Post-EF!');
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log('Server is running on http://localhost:8080');
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
