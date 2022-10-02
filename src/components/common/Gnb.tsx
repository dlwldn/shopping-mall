import React from "react";
import { Link } from "react-router-dom";
import { pageUrl } from "../../lib/consts/pageUrl";

const Gnb = () => {
  return (
    <nav className='gnb'>
      <ul>
        <li>
          <Link to={pageUrl.HOME}>홈</Link>
        </li>
        <li>
          <Link to={pageUrl.PRODUCT_LIST}>상품목록</Link>
        </li>
        <li>
          <Link to={pageUrl.CART}>장바구니</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
