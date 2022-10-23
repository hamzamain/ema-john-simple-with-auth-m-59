import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Grandpa from "./components/Grandpa/Grandpa";
import Inventory from "./components/Inventory/Inventory";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import Main from "./Layouts/Main";
import { productsAndCartLodar } from "./Loders/ProductsAndCartLoders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: productsAndCartLodar,
          element: <Orders></Orders>,
        },
        {
          path: "/inventory",
          element: <Inventory></Inventory>,
        },
        {
          path: "/grandpa",
          element: <Grandpa></Grandpa>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
      ],
    },
    // {
    //   path: "shop",
    //   element: <Shop></Shop>,
    // },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
