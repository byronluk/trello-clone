import auth0 from "auth0-js";

import { history } from "../app";

const auth0Config = {
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENTID,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  responseType: process.env.AUTH0_RESPONSE_TYPE,
  scope: process.env.AUTH0_SCOPE
};

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth(auth0Config);

    this.login = this.login.bind(this);
  }

  handleAuthentication(cbk) {
    this.auth0.parseHash(cbk);
  }

   setSession(authResult) {
    const multiplier = 1000;
    const expiresAt = JSON.stringify(authResult.expiresIn * multiplier + new Date().getTime());

    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
  }

  static logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    history.replace("/");
  }

  static isAuthenticated(expiresAt) {
    if (typeof expiresAt === "undefined") {
      expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    }
    return new Date().getTime() < expiresAt;
  }

  login() {
    this.auth0.authorize();
  }
}

const auth = new Auth();
export default auth;
