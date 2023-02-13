import axios from "axios";
import { randomstring } from "../lib/RandomPassword";

const server = process.env.REACT_APP_SERVER;

export class userService {
  static async createUser(data) {
    const response = await axios.post(`${server}/api/auth/local/register/`, {
      username: data.email,
      email: data.email,
      password: data.password ? data.password : randomstring,
    });
    return response;
  }

  static async authUser(data) {
    const response = await axios.post(`${server}/api/auth/local`, {
      identifier: data.authLogin,
      password: data.authPassword
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
    const response = await axios.get(`https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&client_id=433653952389-47n1u565e8ecv4u8h5k4bff1erpbm2du.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fgoogle%2Fcallback`);
    return response;
  }


  static async getUserDataWithGoogleAuth(code) {
    const response = await axios.post(`http://localhost:1337/strapi-google-auth/user-profile`,{
      code
    });
    return response;
  }
}
