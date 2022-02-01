import axios from "axios";
import { BASE_URL_BACK } from "../config";

export const loginUsers = async (body) => {
  try {
    const { data } = await axios.post(`${BASE_URL_BACK}/users/login`, body);
    return data;
  } catch (error) {
    throw error;
  }
};
