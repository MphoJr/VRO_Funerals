import React from "react";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode"; // install with: npm install jwt-decode

export default function ProtectedRoute({ children, requiredRole }) {
  const token = localStorage.getItem("token");

  if (!token) {
    // No token → redirect to login
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);

    // Check role from token payload
    if (decoded.role !== requiredRole) {
      // Wrong role → redirect to login
      return <Navigate to="/login" replace />;
    }
  } catch (err) {
    console.error("Token decode error:", err);
    return <Navigate to="/login" replace />;
  }

  // Token exists and role matches → allow access
  return children;
}
