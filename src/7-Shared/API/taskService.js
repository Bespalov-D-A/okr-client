import axios from "axios";

const server = process.env.REACT_APP_SERVER;

export class taskService {
  static async getTaskLists(token) {
    const response = await axios.get(`${server}/api/task-lists`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }

  static async deleteTaskList(token, listId) {
    const response = await axios.delete(
      `${server}/api/task-lists/${listId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  }

  static async deleteTaskType(token, listId) {
    const response = await axios.delete(
      `${server}/api/task-types/${listId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  }

  static async getTaskTypes(token) {
    const response = await axios.get(`${server}/api/task-types`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }

  static async createTaskList(token, data) {
    const response = await axios.post(
      `${server}/api/task-lists`,
      {
        data,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  }

  static async createTaskType(token, data) {
    const response = await axios.post(
      `${server}/api/task-types`,
      {
        data,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  }

  static async createTask(token, data) {
    const response = await axios.post(
      `${server}/api/tasks`,
      {
        data,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  }

  static async getTasks(token, query) {
    const response = await axios.get(
      `${server}/api/tasks${query ? "?" + query : ""}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  }

  static async updateTask(token, taskId, data) {
    const response = await axios.put(
      `${server}/api/tasks/${taskId}`,
      {
        data,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  }

  static async deleteTask(token, taskId) {
    const response = await axios.delete(`${server}/api/tasks/${taskId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }
}
