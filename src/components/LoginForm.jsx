import axios from "axios";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
import Input from "./Input";
import Title from "./Title";
import SubTitle from "./SubTitle";
import { useState } from "react";

export default function LoginForm() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
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
    try {
      await axios.post("http://localhost:5000/login", values).then((res) => {
        localStorage.setItem("jwtToken", res.data.token);
        console.log("Login successful");
        setError("");
        setSuccess(true);
        navigate("");
      });
    } catch (err) {
      console.error("Login failed", err.response.data);
      setError(err.response.data.message);
      setSuccess(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Title>Hi there,</Title>
        <br></br>
        <SubTitle>Welcome to our </SubTitle>
        <br />
        <SubTitle>contacts portal</SubTitle>
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
      </div>
      <Button type="submit">login</Button>
      {success && <p style={{ color: "green" }}>Login successful!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
