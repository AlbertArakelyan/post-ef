// Utils
import { request } from '../utils';


class PostService {
  static createPost(data) {
    return request('POST', '/post', data);
  }

  static getPosts(userId) {
    const params = {
      userId,
    };

    return request('GET', '/post', undefined, params);
  }
}

export default PostService;