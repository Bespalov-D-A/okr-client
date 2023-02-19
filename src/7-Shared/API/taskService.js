import axios from "axios";

const server = process.env.REACT_APP_SERVER;

export class taskService {
  static async getTaskLists(token) {
    const response = await axios.get(`${server}/api/task-lists`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response;
  }
}
