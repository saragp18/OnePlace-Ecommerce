import { useState } from "react";
import OnePlace from "../assets/LOGO-BOLSO-1.png";
import Fondo from "../assets/collage.png";
import EmailTelefono from "../components/EmailTelefono";
import Contrasena from "../components/Contrasena";
import Login from "../components/LoginBtn";
import ContrasenaConfirma from "../components/confirmPassword";
import { useNavigate, NavLink } from "react-router-dom";
import { registerUser } from "../services/authenticationServices";
import { postUserData } from "../services/Users";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const user = await registerUser(email, password);

      if (user?.email) {
        await postUserData(user.email);
      }

      navigate("/");

    } catch (err: any) {
      setError(err.message || "Error registering user");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{ backgroundImage: `url(${Fondo})` }}
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
            Create your account
          </h1>

          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-gray-900 text-sm sm:text-base">
              Email or Phone Number
            </h3>
            <EmailTelefono value={email} onChange={(e:any) => setEmail(e.target.value)} />
          </div>

          <div className="mb-2">
            <h3 className="font-semibold mb-2 text-gray-900 text-sm sm:text-base">
              Create a Password
            </h3>
            <Contrasena value={password} onChange={(e:any) => setPassword(e.target.value)} />
          </div>

          <div className="mb-2">
            <h3 className="font-semibold mb-2 text-gray-900 text-sm sm:text-base">
              Confirm the Password
            </h3>
            <ContrasenaConfirma value={confirmPassword} onChange={(e:any) => setConfirmPassword(e.target.value)} />
          </div>

          {error && <p className="text-red-600 text-sm mt-2 text-center">{error}</p>}

          <button
            onClick={handleRegister}
            className="w-full bg-black text-white py-3 rounded-2xl text-lg font-medium hover:bg-gray-800 transition mt-4"
          >
            Register
          </button>

          <p className="text-sm text-gray-600 mt-4 mb-2 text-center">
            Already have an account?
          </p>

          <NavLink to="/">
            <div className="flex justify-center">
              <Login />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
