import axios from "axios"

export class appService {
  static async getCaptcha() {
   const response = await axios.get('https://www.google.com/recaptcha/api.js?onload=recaptchaLoaded&render=explicit')
    return response
    }
} 
