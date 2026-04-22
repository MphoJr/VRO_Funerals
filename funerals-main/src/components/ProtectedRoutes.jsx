import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // 👈 correct import

export default function ProtectedRoute({ children, requiredRole }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);

    if (decoded.role !== requiredRole) {
      // Wrong role → redirect
      return <Navigate to="/login" replace />;
    }
  } catch (err) {
    console.error("Token decode error:", err);
    return <Navigate to="/login" replace />;
  }

  return children;
}
