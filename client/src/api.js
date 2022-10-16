import axios from "axios";

function internalServerError(err) {
  if (err.response && err.response.data && err.response.data.errorMessage) {
    return {
      status: false,
      errorMessage: err.response.data.errorMessage,
    };
  }
  return {
    status: false,
    errorMessage: "Internal server error. Please check your server",
  };
}

const API = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  withCredentials: true,
});

export const getUser = () => API.get("/auth").catch(() => false);

export const login = (credentials) =>
  API.post("/auth/login", credentials).catch(internalServerError);

export const signup = (userInformation) =>
  API.post("/auth/signup", userInformation).catch(internalServerError);

export const logout = () => API.get("/auth/logout").catch(internalServerError);
