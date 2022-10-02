import React, { Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Gnb from "./components/common/Gnb";
import { pageUrl } from "./lib/consts/pageUrl";

const Main = React.lazy(() => import("./pages/Main"));
const ProductList = React.lazy(() => import("./pages/Products/ProductList"));
const ProductDetail = React.lazy(
  () => import("./pages/Products/ProductDetail")
);
const Cart = React.lazy(
  () => import("./pages/Cart/Cart")
);

const App = () => {
  return (
    <Suspense fallback={<>페이지로드중</>}>
      <Routes>
        <Route
          element={
            <div>
              <Gnb />
              <Outlet />
            </div>
          }
        >
          <Route path={pageUrl.HOME} element={<Main />} />
          <Route path={pageUrl.PRODUCT_LIST} element={<ProductList />} />
          <Route path={pageUrl.PRODUCT_DETAIL} element={<ProductDetail />} />
          <Route path={pageUrl.CART} element={<Cart />} />
          <Route path="/*" element={<>404</>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
