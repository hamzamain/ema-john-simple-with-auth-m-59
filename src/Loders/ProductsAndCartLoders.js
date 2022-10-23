import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLodar = async () => {
  //get products
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  //get savedCart
  const savedCart = getStoredCart();
  const initialCart = [];
  console.log("SavedCart", savedCart);
  for (const id in savedCart) {
    console.log(id);
    const quantity = savedCart[id];
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
    }
  }
  console.log(initialCart);

  return { products: products, initialCart: initialCart };
};
