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

  static getPost(postId) {
    return request('GET', `/post/${postId}`);
  }

  static deletePost(postId) {
    return request('DELETE', `/post/${postId}`);
  }
}

export default PostService;
