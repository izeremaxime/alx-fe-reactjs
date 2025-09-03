import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { logout } = useAuth();

  //"Routes", "Route", "ProfileDetails", "ProfileSettings"
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Profile Page</h2>

      <nav className="space-x-4 mb-4">
        <Link to="details" className="text-blue-600">Details</Link>
        <Link to="settings" className="text-blue-600">Settings</Link>
      </nav>

      <button
        onClick={logout}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>

      <Outlet />
    </div>
  );
}
