import React, { useEffect, useState } from "react";

const Modal: React.FC<{ children: React.ReactNode; isOpen: boolean }> = ({
  children,
  isOpen,
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    setIsOpenModal(isOpen);
  }, [isOpen]);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <div
        className="modal-overlay"
        onClick={toggleModal}
        style={{ display: isOpenModal ? "block" : "none" }}
      ></div>
      <div
        className="modal-content"
        style={{ display: isOpenModal ? "block" : "none" }}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
