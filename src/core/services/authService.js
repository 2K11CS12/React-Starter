import jwtDecode from "jwt-decode";

import { helpers } from ".";

export default {
  saveToken(token) {
    localStorage.setItem("BrandsWebJWT", token);
  },
  removeToken() {
    localStorage.removeItem("BrandsWebJWT");
  },
  getToken() {
    return localStorage.getItem("BrandsWebJWT");
  },
  getDecodedToken() {
    let token = this.getToken();
    let decoded = jwtDecode(token);
    return decoded;
  },
  isTokenExpired() {
    let decodedToken = this.getDecodedToken();
    // eslint-disable-next-line radix
    var current_time = parseInt(Date.now().valueOf() / 1000);
    return decodedToken.exp < current_time;
  },
  isAuthenticated() {
    var token = this.getToken();
    if (!token) return false;
    return !this.isTokenExpired();
  },
  signIn(email, password, successCallback, errorCallback) {
    fetch(helpers.getAbsoluteURL("/accounts/token"), {
      method: "POST",
      body: JSON.stringify({
        UserName: email,
        Password: password
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.status === 200 || response.status === 400) {
          return response.json();
        } else {
          if (errorCallback) {
            errorCallback("Internal Server Error. Please try again later.");
          }
        }
      })
      .then(data => {
        if (typeof data === "string") {
          this.saveToken(data);
          if (successCallback) {
            successCallback();
          }
        } else if (typeof data === "object") {
          errorCallback(data[""][0]);
        }
      });
  },
  signOut(currentHistory, callback) {
    this.removeToken();
    if (callback) {
      callback();
    } else if (currentHistory) {
      currentHistory.push("/");
    }
  },
  authenticate(currentHistory) {
    if (!this.isAuthenticated()) {
      currentHistory.push("/login");
    }
  }
};
