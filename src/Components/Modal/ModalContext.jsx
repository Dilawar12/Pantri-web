import React, { createContext, useContext, useState } from "react";
import Modal from "react-modal";
import ModalContainer from "./ModalContainer";

Modal.setAppElement("#root");

const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [signupStep, setSignupStep] = useState("select"); // 'select' | 'customer' | 'provider'

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setModalIsOpen(false);
    setTimeout(() => {
      setIsSignupMode(false);
      setSignupStep("select");
    }, 300);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      <ModalContainer
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        isSignupMode={isSignupMode}
        setIsSignupMode={setIsSignupMode}
        signupStep={signupStep}
        setSignupStep={setSignupStep}
      />
    </ModalContext.Provider>
  );
};
