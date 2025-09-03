import React from "react";
import { useAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/profile"); // redirect after login
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center border rounded bg-gray-50 shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <button 
        onClick={handleLogin} 
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Sign In
      </button>
    </div>
  );
}
