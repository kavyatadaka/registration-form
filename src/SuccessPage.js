import React from "react";
import { useLocation } from "react-router-dom";

function SuccessPage() {
  const location = useLocation();
  const { name, email } = location.state || {};

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> Registration Successful!</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

export default SuccessPage;