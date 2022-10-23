import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import OrderedProducts from "../OrderedProducts/OrderedProducts";
import Product from "../Product/Product";

const Orders = ({ children }) => {
  const { products, initialCart, remover } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  const handleRemoveProduct = (id) => {
    const rest = cart.filter((product) => id !== product.id);
    setCart(rest);
    removeFromDb(id);
  };
  return (
    <div>
      <div className="shop-container">
        <div className="orders-container">
          {cart.map((product) => (
            <OrderedProducts
              key={product.id}
              product={product}
              handler={handleRemoveProduct}
            />
          ))}
          {cart.length === 0 && (
            <h2>
              No item in the Cart Please <Link to={"/"}>Shop</Link>
            </h2>
          )}
        </div>
        <div className="cart-container">
          <Cart cart={cart} clearCart={clearCart} child={children}>
            <Link to="/inventory">
              <button>Inventory</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
