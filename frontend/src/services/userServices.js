import axios from "axios";
import { BASE_URL_BACK } from "../config";

export const loginUsers = async (email, password) => {
  try {
    const params = JSON.stringify({
      email: email,
      password: password,
    });
    const { data } = await axios.post(`${BASE_URL_BACK}/users/login`, params);
    return data;
  } catch (error) {
    throw error;
  }
};
