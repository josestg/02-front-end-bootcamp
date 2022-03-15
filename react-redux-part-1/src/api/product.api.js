const BASE_URL = "https://fakestoreapi.com";

export async function fetchAllProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
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
