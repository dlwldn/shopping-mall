import React from "react";
import { useRecoilState } from "recoil";
import { checkedCartState } from "../../recoils/cart";
import WillPay from "../WiilPay/WillPay";

const PaymentContent = () => {
  const [checkedCartData, setCheckedCartData] = useRecoilState(checkedCartState);
  const showModal = () => {

  }
  
  return <WillPay handleSubmit={showModal} submitTitle="결제하기"/>
};

export default PaymentContent;
