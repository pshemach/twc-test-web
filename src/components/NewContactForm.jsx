import { useState } from "react";
import axios from "axios";
import Title from "./Title";
import Input from "./Input";
import Button from "./Button";

export default function NewContactForm() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    gender: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/newcontact", values);
      console.log("Contact adding successful");
      setError("");
    } catch (err) {
      console.error("adding failed", err.response.data);
      setError(err.response.data.message);
    }
  };
  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: "#083F46" }}>
      <div>
        <Title>New Contact</Title>
      </div>
      <div>
        <Input
          type="text"
          name="fullName"
          value={values.fullName}
          placeholder="full name"
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="e-mail"
          value={values.email}
          onChange={handleChange}
          style={{ display: "block" }}
        />
        <Input
          type="tel"
          name="phoneNumber"
          placeholder="phone number"
          value={values.phoneNumber}
          onChange={handleChange}
          pattern="[0-9]*"
        />
        gender
        <Input
          type="radio"
          name="gender"
          value="male"
          checked={values.gender === "male"}
          onChange={handleChange}
        />{" "}
        male
        <Input
          type="radio"
          name="gender"
          value="female"
          checked={values.gender === "female"}
          onChange={handleChange}
        />{" "}
        female
      </div>
      <Button type="submit">add your first contact</Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
