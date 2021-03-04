import fetch from "cross-fetch";
import { API_ROOT_URL } from "@Common/Constants";

const queryString = require("query-string");

export default (endpoint, method = "get", body) =>
  fetch(`${API_ROOT_URL}${endpoint}`, {
    headers,
    method,
    body: queryString.stringify(body),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      if (response.status === 201) {
        return response.json();
      }

      return response;
    })
    .catch(() => ({
      status: 100,
      message: "Ooops network error! Check your net connection",
    }));
