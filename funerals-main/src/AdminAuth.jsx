import React, { useState } from "react";

export default function AdminAuth() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/auth/admin/login" : "/auth/admin/register";

    try {
      const response = await fetch(`http://localhost:4000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(isLogin ? "Admin logged in!" : "Admin registered!");
        localStorage.setItem("token", data.token); // Save JWT
      } else {
        alert(data.error || "Failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">
        {isLogin ? "Admin Login" : "Admin Register"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border p-2"
            />
          </div>
        )}
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-red-700 text-white px-4 py-2 rounded"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <button
        onClick={() => setIsLogin(!isLogin)}
        className="mt-4 text-blue-600"
      >
        {isLogin
          ? "Need an account? Register"
          : "Already have an account? Login"}
      </button>
    </div>
  );
}
