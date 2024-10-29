import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Cookies } from 'react-cookie';

function LoginPage() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState(""); // Add firstname state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3002/login", {
        firstname, // Include firstname in the request
        email,
        password,
      });

      const cookies = new Cookies();
      cookies.set('token', response.data.token, { path: '/', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) }); // Set cookie for 7 days
      navigate("/");
      setError(""); // Clear any previous errors
    } catch (error) {
      // Convert the error to a readable message
      setError(error.response?.data?.error || "An error occurred. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Register / Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="firstname">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Register / Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
