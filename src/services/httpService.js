// This module is responsible for calling http request to the backend

import axios from "axios";
import logger from "./logService";

import { toast } from "react-toastify";

// Here we are going to add a configuration for configuring default header.So we are telling the axios Hey! whenever you are sending
// an http reqest make sure to include this header in the request.

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt; // With this we can set header with all kind of http request( get put post delete) and instead of common we can use ... post( wiht we can can configure all the header only with the post request)
}

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast("An unexpected error occur");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
  setJwt
};
