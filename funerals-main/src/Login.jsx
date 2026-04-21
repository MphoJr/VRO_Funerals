import React, { useState } from "react";
import AdminAuth from "./AdminAuth";
import ClientAuth from "./ClientAuth";
import ClientRegistration from "./ClientRegistration";

export default function LoginPage() {
  const [role, setRole] = useState("admin"); // default to admin
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    alert("Logged out successfully");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to VRO Funerals</h1>

      {/* Role selector */}
      <div className="mb-6">
        <button
          onClick={() => setRole("admin")}
          className={`px-4 py-2 mr-2 rounded ${role === "admin" ? "bg-red-700 text-white" : "bg-gray-300"}`}
        >
          Admin
        </button>
        <button
          onClick={() => setRole("client")}
          className={`px-4 py-2 rounded ${role === "client" ? "bg-red-700 text-white" : "bg-gray-300"}`}
        >
          Client
        </button>
      </div>

      {/* Show forms based on role */}
      <div className="w-full max-w-md">
        {role === "admin" && !isLoggedIn && (
          <AdminAuth onLoginSuccess={() => setIsLoggedIn(true)} />
        )}
        {role === "client" && !isLoggedIn && (
          <ClientAuth onLoginSuccess={() => setIsLoggedIn(true)} />
        )}
      </div>

      {/* If admin is logged in, show client registration */}
      {role === "admin" && isLoggedIn && (
        <div className="mt-8 w-full max-w-md">
          <ClientRegistration />
          <button
            onClick={handleLogout}
            className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      )}

      {/* If client is logged in */}
      {role === "client" && isLoggedIn && (
        <div className="mt-8">
          <p className="text-green-700 font-semibold">
            Client logged in successfully!
          </p>
          <button
            onClick={handleLogout}
            className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
