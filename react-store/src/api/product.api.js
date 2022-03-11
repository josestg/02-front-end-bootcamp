const BASE_URL = "https://fakestoreapi.com";

export async function fetchAllProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    // biar ada delay.
    for (let i = 0; i < 1e6; i++) {}
    return data;
  } catch (error) {
    throw error;
  }
}
