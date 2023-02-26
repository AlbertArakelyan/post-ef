// Utils
import { request } from '../utils';

class UserService {
  static signUp(data) {
    return request('POST', 'user/sign-up', data);
  }

  static verifyEmail(token) {
    return request('GET', `user/verify-email/${token}`);
  }

  static signIn(data) {
    return request('POST', 'user/sign-in', data);
  }
}

export default UserService;