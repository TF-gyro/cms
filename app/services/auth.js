import Service from '@ember/service';
import ENV from 'junction/config/environment';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class AuthService extends Service {
  @service router;
  @service cookies;
  @service type;
  @service types;
  @service blueprints;

  @tracked inputPassword;
  @tracked isLoggedIn = false;
  @tracked junctionPassword = '';
  @tracked goToRouteAfterLogin = 'index';
  @tracked goToSlugAfterLogin = '';

  checkIfLoggedIn = async () => {
    this.type.loadingSearchResults = true;
    let cookiePassword = this.cookies.getCookie(ENV.JUNCTION_SLUG);

    if (
      cookiePassword !== '' &&
      this.junctionPassword !== '' &&
      cookiePassword == this.junctionPassword
    ) {
      this.type.loadingSearchResults = false;
      return true;
    } else {
      this.type.loadingSearchResults = false;
      return false;
    }
  };

  @action
  async submitPassword() {
    this.type.loadingSearchResults = true;
    
    if (
      this.inputPassword !== '' &&
      this.junctionPassword !== '' &&
      this.inputPassword == this.junctionPassword
    ) {
      this.cookies.setCookie(ENV.JUNCTION_SLUG, this.inputPassword);
      this.type.loadingSearchResults = false;
      this.justGoToRouteAfterLogin();
    } else {
      this.type.loadingSearchResults = false;
      alert('Incorrect password.');
    }
  }

  @action
  async justGoToRouteAfterLogin() {
    this.inputPassword = null; // clear stored password for security reasons

    if (
      this.goToRouteAfterLogin == 'index' ||
      this.goToRouteAfterLogin == 'auth'
    ) {
      this.router.transitionTo('index');
    } else {
      this.type.currentType = this.types.json.modules[this.goToSlugAfterLogin];
      this.router.transitionTo(
        this.goToRouteAfterLogin,
        this.goToSlugAfterLogin,
      );
    }
  }

  @action
  async logout(e) {
    e.preventDefault();

    await this.cookies.eraseCookie(ENV.JUNCTION_SLUG);

    this.router.transitionTo('auth');
  }

  @action
  async getJunctionPassword() {
    if (ENV.JUNCTION_SLUG == undefined || ENV.JUNCTION_SLUG == '') {
      alert('Please define JUNCTION_SLUG in .ENV file');
    } else {
      this.junctionPassword = ENV.JUNCTION_PASSWORD;
      
      // Check if user is already logged in
      let cookiePassword = this.cookies.getCookie(ENV.JUNCTION_SLUG);
      if (cookiePassword !== '' && cookiePassword == this.junctionPassword) {
        this.justGoToRouteAfterLogin();
      }
    }
  }
}
