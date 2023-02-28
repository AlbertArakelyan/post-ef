import userReducer from './user/user.reducer';
import postReducer from './post/post.reducer';

const rootReducer = {
  user: userReducer,
  post: postReducer,
};

export default rootReducer;