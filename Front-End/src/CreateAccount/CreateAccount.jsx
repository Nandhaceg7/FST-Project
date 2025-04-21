import { useState } from "react";
import "./CreateAccount.css";
import axios from "axios";

export default function CreateAccount() {
  const [formData1, setFormData1] = useState({
    Username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  // ✅ Handle input changes
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData1((prevData) => ({ ...prevData, [name]: value }));
  // };

  // ✅ Submit form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData1.password !== formData1.confirmpassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/add", formData1); // ✅ Correct route
      alert("✅ User added: " + res.data.Username);
      setFormData1({
        Username: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
    } catch (err) {
      console.log("❌ Error adding user");
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="Username"
              value={formData1.Username}
              // onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData1.email}
              // onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData1.password}
              // onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmpassword"
              value={formData1.confirmpassword}
              // onChange={handleChange}
            />
          </div>

          <button type="submit"  className="btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
