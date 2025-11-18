import React from "react";
import Modal from "react-modal";
import { FiArrowLeft } from "react-icons/fi"; // ✅ Back arrow icon
import LoginForm from "../AppForm/LoginForm";
import CustomerSignupForm from "../AppForm/CustomerSignupForm";
import ProviderSignupForm from "../AppForm/ProviderSignupForm";

const ModalContainer = ({
    modalIsOpen,
    closeModal,
    isSignupMode,
    setIsSignupMode,
    signupStep,
    setSignupStep,
}) => {
    // ✅ Handle go-back logic
    const handleGoBack = () => {
        if (signupStep === "customer" || signupStep === "provider") {
            setSignupStep("select");
        } else {
            setIsSignupMode(false);
        }
    };

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="modal-dialog modal-dialog-centered"
            overlayClassName="modal-backdrop fade show"
        >
            <div className="modal-content">
                <div className="modal-header d-flex align-items-center justify-content-between">
                    {/* ✅ Show back arrow if user is in signup flow */}
                    {isSignupMode && (
                        <button
                            type="button"
                            className="btn btn-link p-0 me-2 text-light"
                            onClick={handleGoBack}
                            style={{ fontSize: "1.25rem" }}
                        >
                            <FiArrowLeft />
                        </button>
                    )}

                    <h5 className="modal-title w-100 text-center fw-bold mb-0">
                        {isSignupMode ? "Create an Account" : "Login to Your Account"}
                    </h5>

                    <button
                        type="button"
                        className="btn-close ms-auto"
                        onClick={closeModal}
                    ></button>
                </div>

                <div className="modal-body">
                    {!isSignupMode ? (
                        <LoginForm
                            onSignup={() => setIsSignupMode(true)}
                            closeModal={closeModal}
                        />
                    ) : signupStep === "select" ? (
                        <div className="text-center">
                            <p className="select-account-ty">Select Your Role</p>
                            <button className="cust-btn" onClick={() => setSignupStep("customer")}>
                                Customer
                            </button>
                            <button className="cust-btn" onClick={() => setSignupStep("provider")}>
                                Provider
                            </button>
                        </div>
                    ) : signupStep === "customer" ? (
                        <CustomerSignupForm
                            onBack={handleGoBack}
                            closeModal={closeModal}
                        />
                    ) : (
                        <ProviderSignupForm
                            onBack={handleGoBack}
                            closeModal={closeModal}
                        />
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default ModalContainer;
