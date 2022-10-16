import React, { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

const ModalPortal = ({ children }: { children: PropsWithChildren }) => {
  return createPortal(
    children as React.ReactNode,
    document.getElementById("modal") as HTMLElement
  );
};

const PaymentModal = ({
  show,
  proceed,
  cancel,
}: {
  show: boolean;
  proceed: () => void;
  cancel: () => void;
}) => {
  if (!show) return null;
  return (
    <ModalPortal>
      <div className={`modal ${show ? "show" : ""}`}>
        <div className="modal__inner">
          <p>정말 결제할까요?</p>
          <div>
            <button onClick={proceed}>예</button>
            <button onClick={cancel}>아니오</button>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default PaymentModal;
