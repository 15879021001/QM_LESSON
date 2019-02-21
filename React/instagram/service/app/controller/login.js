'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async register() {
    this.ctx.body = 'do register';
  }
}

module.exports = LoginController;
