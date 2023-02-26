class Controller {
  static #jwtSecret = 'Tatev';

  static catchError(e) {
    console.log(e);
  }

  static get jwtSecret() {
    return this.#jwtSecret;
  }
}

export default Controller;