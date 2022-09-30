import React from "react";
import { Route, Routes } from "react-router-dom";

const Main = React.lazy(() => import('./pages/Main'));
const ProductList = React.lazy(() => import('./pages/Products/ProductList'));
const ProductDetail = React.lazy(() => import('./pages/Products/ProductDetail'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/*" element={<>404</>} />
    </Routes>
  );
};

export default App;
