import React from "react";
import successIcon from "../assets/success.svg";

export const Success = ({ count }) => {
  return (
    <div className="success-block">
      <img src={successIcon} alt="Success" />
      <h3>Успешно!</h3>
      <p>{count} пользователям отправлено приглашение.</p>
      <button
        onClick={() => window.location.reload()}
        className="send-invite-btn"
      >
        Назад
      </button>
    </div>
  );
};
