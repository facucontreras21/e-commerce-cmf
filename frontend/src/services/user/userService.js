import axios from "axios";
import { BASE_URL_BACK } from "../../config/";

/**
 * Sign in
 */
export const signInService = async (email, password) => {
  const body = {
    email,
    password,
  };
  try {
    const { data } = await axios.post(`${BASE_URL_BACK}/users/login`, body);
    if (data.token) {
      localStorage.setItem("user", JSON.stringify(data));
    }
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Sign Up
 */
export const signUpService = async (name, email, password) => {
  try {
    const body = {
      name,
      email,
      password,
    };
    const { data } = await axios.post(
      `${BASE_URL_BACK}/users/`,
      JSON.parse(body)
    );
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * Logout
 */
export const logoutService = () => {
  localStorage.removeItem("user");
};
