import React, { useState } from "react";

const RegistrationForm = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!username) newErrors.username = "Username is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const userData = { username, email, password };
    if (onRegister) onRegister(userData);

    // Reset form after submission
    setUsername("");
    setEmail("");
    setPassword("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">Register</h2>

      {/* Username */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter username"
        />
        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter email"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Password */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter password"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;