import axios from "axios";
import { BASE_URL_BACK } from "../../config/";



/**
 * Create a review
 */
export const createReviewService = async (token, body, id) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const { data } = await axios.post(
      `${BASE_URL_BACK}/products/${id}/reviews`,
      body,
      config
    );
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
