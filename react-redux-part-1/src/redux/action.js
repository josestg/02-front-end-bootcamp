export const ACTION_INIT_PRODUCTS = "products/init";
export const ACTION_ADD_PRODUCT_TO_CART = "products/add-to-cart";
export const ACTION_DEL_PRODUCT_FROM_CART = "products/delete-from-cart";
export const ACTION_USE_DISCONT = "discont/use";
export const ACTION_UNUSED_DISCONT = "discont/remove";

export function takeDiscont(name, rate) {
  return {
    type: ACTION_USE_DISCONT,
    payload: {
      name: name,
      rate: rate,
    },
  };
}

export function unUseDiscont(name) {
  return {
    type: ACTION_UNUSED_DISCONT,
    payload: {
      name: name,
    },
  };
}

export function initProducts(newProducts) {
  return {
    type: ACTION_INIT_PRODUCTS,
    payload: newProducts,
  };
}

export function addProductCart(id) {
  return {
    type: ACTION_ADD_PRODUCT_TO_CART,
    payload: {
      id: id,
    },
  };
}

export function delProductCart(id) {
  return {
    type: ACTION_DEL_PRODUCT_FROM_CART,
    payload: {
      id: id,
    },
  };
}
