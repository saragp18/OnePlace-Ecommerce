import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import OnePlace from "../assets/LOGO-BOLSO-1.png";
import Fondo from "../assets/collage.png";
import Register from "../components/RegisterBtn";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const validEmail = "admin@oneplace.com";
    const validPassword = "12345";

    if (email === validEmail && password === validPassword) {
      navigate("/Home");
    } else {
      setError("Incorrect email or password");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{
          backgroundImage: `url(${Fondo})`,
        }}
      ></div>

      <div className="relative flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl w-[90%] max-w-[900px] h-auto md:h-[520px] backdrop-blur-sm">
        <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-6 md:p-0">
          <img
            src={OnePlace}
            alt="OnePlace Logo"
            className="w-48 sm:w-60 md:w-72 h-auto object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 leading-tight text-center md:text-left">
            Login to your account
          </h1>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <h3 className="font-semibold mb-2 text-gray-900 text-sm sm:text-base">
                Email or Phone Number
              </h3>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email or Phone Number"
                className="w-full px-4 py-2 bg-gray-200 rounded-xl border-none focus:outline-none shadow-inner"
              />
            </div>

            <div className="mb-2">
              <h3 className="font-semibold mb-2 text-gray-900 text-sm sm:text-base">
                Password
              </h3>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-2 bg-gray-200 rounded-xl border-none focus:outline-none shadow-inner"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
            )}

            <NavLink to="/Home">
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-2xl text-lg font-medium hover:bg-gray-800 transition mt-4"
              >

                Sign in
              </button>
            </NavLink>

          </form>

          <p className="text-sm text-gray-600 mt-4 mb-2 text-center">
            Don’t have an account?
          </p>

          <NavLink to="/RegisterPage">
            <div className="flex justify-center">
              <Register />
            </div>
          </NavLink>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;
