import actionTypes from "../actions/actionTypes";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case actionTypes.PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case actionTypes.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productListTopReducer = (
  state = { productListTop: [] },
  action
) => {
  switch (action.type) {
    case actionTypes.PRODUCTS_TOP_REQUEST:
      return { loading: true, productListTop: [] };
    case actionTypes.PRODUCTS_TOP_SUCCESS:
      return {
        loading: false,
        productListTop: action.payload,
      };
    case actionTypes.PRODUCTS_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productByIdReducer = (state = { productbById: {} }, action) => {
  switch (action.type) {
    case actionTypes.PRODUCTS_TOP_REQUEST:
      return { loading: true, productbById: {} };
    case actionTypes.PRODUCTS_TOP_SUCCESS:
      return {
        loading: false,
        productbById: action.payload,
      };

    case actionTypes.PRODUCTS_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
