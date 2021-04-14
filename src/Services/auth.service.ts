import axios, { AxiosResponse } from "axios";
import { SignupUserInfo, UserLoginRequest } from "../store/airports/types";

const { REACT_APP_BACKEND_URL } = process.env;
const API_URL = REACT_APP_BACKEND_URL + "/api/authenticate";

class AuthService {
  // Register new user
  async RegisterNewUser(user: SignupUserInfo) {
    const response: AxiosResponse = await axios.post(API_URL + "/signup", user);
    if (response.status === 200) {
      // Successfully registered user
    }
    return response;
  }

  // Login user
  async LoginUser(credentials: UserLoginRequest) {
    const response: AxiosResponse = await axios.post(API_URL, credentials);

    if (response.status === 200) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response;
  }
}

export default new AuthService();
