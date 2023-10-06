import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Backdrop from "../Backdrop/Backdrop";
import { useEscapeKey } from "../../utils/useEscapeKey";

const modalRoot = document.getElementById("modal-root");
const windowRoot = document.getElementById("window-root");

const ModalPortal = ({ children, isModalOpen, setIsModalOpen }) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  useEscapeKey(() => setIsModalOpen(false));

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />,
        modalRoot,
      )}
      {ReactDOM.createPortal(children, windowRoot)}
    </>
  );
};

export default ModalPortal;
