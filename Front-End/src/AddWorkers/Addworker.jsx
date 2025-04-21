import React, { useState } from "react";
import axios from "axios";

function AddWorker() {
  const [form, setForm] = useState({
    name: "",
    phoneno: "",
    age: "",
    categoryOfWork: "",
    address: "",
    pincode: "",
    image: "", // base64 image string
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setForm((prevForm) => ({ ...prevForm, image: reader.result }));
    };

    if (file) {
      reader.readAsDataURL(file); // convert to base64
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/workers", form);
      alert("Worker added!");
      setForm({
        name: "",
        phoneno: "",
        age: "",
        categoryOfWork: "",
        address: "",
        pincode: "",
        image: "",
      });
    } catch (err) {
      alert("Error submitting the form.");
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ width: "300px", display: "flex", flexDirection: "column" }}
      >
        <h2 style={{ textAlign: "center" }}>Add New Workers</h2>

        {["name", "phoneno", "age", "categoryOfWork", "address", "pincode"].map(
          (key) => (
            <input
              key={key}
              name={key}
              placeholder={key}
              value={form[key]}
              onChange={handleChange}
              style={{ padding: "10px", marginBottom: "10px" }}
              required
            />
          )
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginBottom: "10px" }}
          required
        />

        <button type="submit" style={{ padding: "10px" }}>
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddWorker;
