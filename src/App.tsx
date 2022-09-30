import React from "react";
import { Route, Routes } from "react-router-dom";

const Main = React.lazy(() => import('./pages/Main'));
const Product = React.lazy(() => import('./pages/Products/Product'));
const ProductDetail = React.lazy(() => import('./pages/Products/ProductDetail'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/products" element={<Product />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/*" element={<>404</>} />
    </Routes>
  );
};

export default App;
