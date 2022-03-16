import produce from "immer";

export function initProductReducer(state, payload) {
  const nextState = produce(state, (draf) => {
    draf.products = payload;
  });

  return nextState;
}

export function addProductCartReducer(state, payload) {
  const nextState = produce(state, (draf) => {
    const cart = draf.cartProducts;
    const found = cart.find((item) => item.id === payload.id);
    if (found !== undefined) {
      found.count++;
    } else {
      cart.push({
        id: payload.id,
        count: 1,
      });
    }
  });

  return nextState;
}

export function delProductCartReducer(state, payload) {
  const nextState = produce(state, (draf) => {
    const cart = draf.cartProducts;
    const index = cart.findIndex((item) => item.id === payload.id);
    if (index !== -1) {
      cart[index].count--;

      if (cart[index].count === 0) {
        cart.splice(index, 1);
      }
    }
  });

  return nextState;
}

export function takeDiscontReducer(state, payload) {
  const nextState = produce(state, (draf) => {
    const { usedCoupons } = draf;
    const found = usedCoupons.find((item) => item.name == payload.name);
    if (found === undefined) {
      usedCoupons.push({ name: payload.name, rate: payload.rate });
    }
  });

  return nextState;
}

export function unUsedDiscontReducer(state, payload) {
  const nextState = produce(state, (draf) => {
    const { usedCoupons } = draf;
    const index = usedCoupons.findIndex((item) => item.name == payload.name);
    if (index !== -1) {
      usedCoupons.splice(index, 1);
    }
  });

  return nextState;
}
