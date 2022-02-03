import axios from "axios";
import { BASE_URL_BACK } from "../config";

export const getProducts = async (keyword, pageNumber) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL_BACK}/products/all-products?keywords=${keyword}&pageNumber=${pageNumber}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getTopProducts = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL_BACK}/products/top`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (token, body) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await axios.post(
      `${BASE_URL_BACK}/products/`,
      body,
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const createProductReview = async (token, body, id) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await axios.post(
      `${BASE_URL_BACK}/products/${id}/reviews`,
      body,
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProductsById = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL_BACK}/products/${id}`);

    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (token, id) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await axios.delete(
      `${BASE_URL_BACK}/products/${id}`,
      {},
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (token, body, id) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await axios.put(
      `${BASE_URL_BACK}/products/${id}`,
      body,
      config
    );
    return data;
  } catch (error) {
    throw error;
  }
};
