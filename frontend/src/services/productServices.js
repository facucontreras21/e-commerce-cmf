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
