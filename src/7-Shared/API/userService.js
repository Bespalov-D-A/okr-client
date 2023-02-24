import axios from "axios";
import { randomString } from "../lib/RandomPassword";

const server = process.env.REACT_APP_SERVER;

export class userService {
  static async createUser(data) {
    const response = await axios.post(`${server}/api/auth/local/register/`, {
      username: data.email,
      email: data.email,
      password: data.password ? data.password : randomString(),
    });
    return response;
  }

  static async authUser(data) {
    const response = await axios.post(`${server}/api/auth/local`, {
      identifier: data.authLogin,
      password: data.authPassword,
    });
    return response;
  }

  static async getGoogleUserData(access_token) {
    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          Accept: "application/json",
        },
      }
    );
    return response;
  }

  static async recoveryPassword(data) {
    const response = await axios.post(`${server}/api/auth/forgot-password`, {
      email: data.email,
    });
    return response;
  }

  static async googleOAuth() {
    const response = await axios.get(process.env.REACT_APP_OAUTH_LINK);
    return response;
  }

  static async getUserDataWithGoogleAuth(code) {
    const response = await axios.post(
      `http://localhost:1337/strapi-google-auth/user-profile`,
      {
        code,
      }
    );
    return response;
  }

  static async getUserProfile(token) {
    const response = await axios.get(`${server}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });
    return response;
  }
}
