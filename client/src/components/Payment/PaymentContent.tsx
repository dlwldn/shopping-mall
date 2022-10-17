import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { graphqlFetcher } from "../../lib/apis/base";
import { pageUrl } from "../../lib/consts/pageUrl";
import { UPDATE_CART } from "../../lib/graphql/cart";
import { EXECUTE_PAY } from "../../lib/graphql/payment";
import { checkedCartState } from "../../recoils/cart";
import WillPay from "../WiilPay/WillPay";
import PaymentModal from "./PaymentModal";

type PaymentInfos = string[];

const PaymentContent = () => {
  const navigate = useNavigate();
  const [checkedCartData, setCheckedCartData] =
    useRecoilState(checkedCartState);
  const [modalShown, toggleModal] = useState(false);
  const { mutate: executePay } = useMutation((ids: PaymentInfos) =>
    graphqlFetcher(EXECUTE_PAY, { ids })
  );

  const showModal = () => {
    toggleModal(true);
  };
  const proceed = () => {
    const ids = checkedCartData.map(({ id }) => id);
    executePay(ids, {
      onSuccess: () => {
        setCheckedCartData([]);
        alert("결제가 완료되었습니다.");
        navigate(pageUrl.PRODUCT_LIST, { replace: true });
      },
    });
  };
  const cancel = () => {
    toggleModal(false);
  };

  return (
    <div>
      <WillPay handleSubmit={showModal} submitTitle="결제하기" />
      <PaymentModal show={modalShown} proceed={proceed} cancel={cancel} />
    </div>
  );
};

export default PaymentContent;
