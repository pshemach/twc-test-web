import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Title from "./Title";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

export default function RegistorForm() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await axios.post("http://localhost:5000/register", values);
      console.log("Registration successful");
      setError("");
      navigate("/login");
    } catch (err) {
      console.error("Registration failed", err.response.data);
      setError(err.response.data.message);
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: "#083F46" }}>
      <div>
        <Title>Register Now!</Title>
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="e-mail"
          value={values.email}
          onChange={handleChange}
          style={{ display: "block" }}
        />
        <Input
          type="password"
          name="password"
          value={values.password}
          placeholder="password"
          onChange={handleChange}
          style={{ display: "block" }}
        />
        <Input
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          placeholder="confirm password"
          onChange={handleChange}
          style={{ display: "block" }}
        />
      </div>
      <Button type="submit">register</Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <Link to="/login" style={{ color: "#ffffff" }}>
          {"< Back to login"}
        </Link>
      </div>
    </form>
  );
}
