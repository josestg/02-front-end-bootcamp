export const getProductList = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
    });
    const data = await response.json();

    for (let i = 0; i < 10e9; i++) {}

    const mapped = data.map((e) => {
      return {
        id: e.id,
        title: e.title,
        price: e.price,
      };
    });

    return mapped;
  } catch (error) {
    throw error;
  }
};

export const addNewProduct = async () => {};
