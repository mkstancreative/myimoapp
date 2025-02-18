import React from "react";
import "./LoginModal.css";
import { Link } from "react-router-dom";

function LoginModal({ isOpenModal, handleModal, pageModal }) {
  if (!isOpenModal) return null;

  const content = {
    alljobs: {
      message: "You Need to be Logged In To Apply for Jobs",
      loginText: "Login to Apply for Jobs",
    },
    digital: {
      message: "You need to be Logged in To View Full Report",
      loginText: "Login to Access Resources",
    },
  };

  const currentContent = content[pageModal];

  return (
    currentContent && (
      <div
        className={`modal_overlay_container ${isOpenModal ? "show" : ""}`}
        onClick={handleModal}
      >
        <div className="modal_block" onClick={(e) => e.stopPropagation()}>
          <h3>{currentContent.message}</h3>
          <Link to="#">{currentContent.loginText}</Link>
          <Link to="#">Sign Up</Link>
        </div>
      </div>
    )
  );
}

export default LoginModal;
