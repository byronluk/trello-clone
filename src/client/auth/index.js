import auth0 from "auth0-js";

const config = {
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENTID,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  responseType: process.env.AUTH0_RESPONSE_TYPE,
  scope: process.env.AUTH0_SCOPE
};

import { history } from "../app";

export default class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth(config);
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace("/home");
      } else if (err) {
        history.replace("/home");
        console.log(err); // eslint-disable-line
      }
    });
  }

  setSession(authResult) {
    const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime()); // eslint-disable-line

    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    history.replace("/home");
  }

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    history.replace("/home");
  }

  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }

  login() {
    this.auth0.authorize();
  }
}
