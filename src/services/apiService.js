import { Auth } from ".";

import { helpers } from ".";

export default {
  get(url) {
    let headers = this.prepareRequestHeaders();
    return fetch(helpers.getAbsoluteURL(url), {
      method: "GET",
      headers: headers
    });
  },
  post(url, body) {
    let headers = this.prepareRequestHeaders();
    return fetch(helpers.getAbsoluteURL(url), {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers
    });
  },
  put(url, body) {
    let headers = this.prepareRequestHeaders();
    return fetch(helpers.getAbsoluteURL(url), {
      method: "PUT",
      body: JSON.stringify(body),
      headers: headers
    });
  },
  delete(url) {
    let headers = this.prepareRequestHeaders();
    return fetch(helpers.getAbsoluteURL(url), {
      method: "DELETE",
      headers: headers
    });
  },
  patch(url, body) {
    let headers = this.prepareRequestHeaders();
    return fetch(helpers.getAbsoluteURL(url), {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: headers
    });
  },
  prepareRequestHeaders() {
    let headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    let token = Auth.getToken();
    if (token) {
      headers["Authorization"] = "Bearer " + token;
    }
    return headers;
  }
};
