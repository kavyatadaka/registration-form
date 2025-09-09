import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to success page and pass data
    navigate("/success", { state: formData });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User Registration Form</h1>
      <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
        
        <div style={{ marginBottom: "10px" }}>
          <label>Name: </label><br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email: </label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password: </label><br />
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>

        <button type="submit" style={{ padding: "10px", marginTop: "10px" }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;