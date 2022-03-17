export const ACTION_INIT_PRODUCTS = "products/init";
export const ACTION_ADD_PRODUCT_TO_CART = "products/add-to-cart";
export const ACTION_SET_PRODUCT_CART = "carts/set";
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

export function addProductCartAPI(id) {
  return async (dispatch, getState) => {
    const action = addProductCart(id);
    dispatch(action);

    // const { cartProducts } = getState();
    // console.log(cartProducts);

    await fetch("http://localhost:4000/carts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        product_id: id,
      }),
    });
  };
}

export function setProductCart(carts) {
  return {
    type: ACTION_SET_PRODUCT_CART,
    payload: {
      carts: carts,
    },
  };
}

export function fetchProductCartAPI() {
  return async (dispatch, getState) => {
    // const action = addProductCart(id);
    // dispatch(action);

    const response = await fetch("http://localhost:4000/carts", {
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    });

    const data = await response.json();

    /**
     * src : [{ "product_id": 1, "id": 1}, { "product_id": 1, "id": 2}, { "product_id": 2, "id": 3} ]
     * dst : [{id: 1, count: 2}, {id: 2, count: 1}]
     */

    // mencatat count product untuk setiap product_id
    const counters = {}; // key=product_id, value: counter
    data.forEach((item) => {
      const productID = item.product_id;
      const cartID = item.id;
      if (counters[productID] === undefined) {
        counters[productID] = [];
      }

      counters[productID].push(cartID);
    });

    // Mengubah counters menjadi dst-like.
    const dst = Object.keys(counters).map((productID) => ({
      id: Number(productID),
      count: counters[productID].length,
      cartid: counters[productID],
    }));

    dispatch(setProductCart(dst));
  };
}

export function delProductCart(id, cid) {
  return {
    type: ACTION_DEL_PRODUCT_FROM_CART,
    payload: {
      id: id,
      cid: cid,
    },
  };
}

export function delProductCartAPI(id) {
  return async (dispatch, getState) => {
    const { cartProducts } = getState();
    const target = cartProducts.find((p) => p.id === id);
    const cartid = target.cartid;

    if (cartid && cartid.length <= 0) {
      return;
    }

    const cid = cartid[cartid.length - 1];

    const action = delProductCart(id, cid);
    dispatch(action);

    await fetch("http://localhost:4000/carts/" + cid, {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    });
  };
}
