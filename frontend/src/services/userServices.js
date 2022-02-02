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

export const registerUser = async (name, email, password) => {
  try {
    const body = {
      name,
      email,
      password,
    };
    const { data } = await axios.post(`${BASE_URL_BACK}/users/`, body);
    return data;
  } catch (error) {
    throw error;
  }
};

export const allUsers = async (token) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await axios.get(
      `${BASE_URL_BACK}/users/all-users`,
      {},
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const userProfile = async (token) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await axios.get(
      `${BASE_URL_BACK}/users/profile`,
      {},
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const modifyUserProfile = async (token, name, email, password) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const body = {
      name,
      email,
      password,
    };
    const { data } = await axios.put(
      `${BASE_URL_BACK}/users/profile`,
      body,
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteUserProfile = async (token, id) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await axios.delete(
      `${BASE_URL_BACK}/users/${id}`,
      {},
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserProfile = async (token) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await axios.get(
      `${BASE_URL_BACK}/users/${id}`,
      {},
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const putUserProfile = async (token, name, email, password, isAdmin) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const body = {
      name,
      email,
      password,
      isAdmin,
    };
    const { data } = await axios.put(
      `${BASE_URL_BACK}/users/${id}`,
      body,
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};
