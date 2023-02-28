import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';


dotenv.config();

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: 'Invalid or expired token',
        });
      }

      req.user = decoded;
      next();
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message || 'Something went worng',
    });
  }
};

export default auth;