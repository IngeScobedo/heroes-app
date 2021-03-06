import React from "react";
import { useNavigate } from "react-router-dom";

export const Loginscreen = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Loginscreen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
