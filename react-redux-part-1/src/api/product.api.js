const BASE_URL = "http://localhost:4000";

export async function fetchAllProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchProductByID(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchProductByIDs(ids) {
  const products = [];
  for (let i = 0; i < ids.length; i++) {
    const eachProduct = await fetchProductByID(ids[i]);
    products.push(eachProduct);
  }

  return products;
}

export async function takeNProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    return data.slice(0, 5);
  } catch (error) {
    throw error;
  }
}
