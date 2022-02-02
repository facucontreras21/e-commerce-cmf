import actionTypes from "./actionTypes";
import { getProducts, getTopProducts } from "../../services/productServices";

/**
 * Returns a list of all products
 */
export const listProducts = (keyword = "", pageNumber = "") => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.PRODUCT_LIST_REQUEST });
      const data = await getProducts(keyword, pageNumber);
      dispatch({
        type: actionTypes.PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

/**
 * Returns a list of the most ranked products
 */
export const listProductsTop = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.PRODUCTS_TOP_REQUEST });
      const data = await getTopProducts(); //observacion :: cambiar nombre a "data"
      dispatch({
        type: actionTypes.PRODUCTS_TOP_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.PRODUCTS_TOP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
