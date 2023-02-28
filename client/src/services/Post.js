// Utils
import { request } from '../utils';


class PostService {
  static createPost(data) {
    return request('POST', '/post', data);
  }
}

export default PostService;