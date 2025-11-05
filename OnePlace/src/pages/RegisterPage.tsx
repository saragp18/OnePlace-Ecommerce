import React from "react";
import OnePlace from "../assets/LOGO-BOLSO-1.png";
import Fondo from "../assets/collage.png";
import EmailTelefono from "../components/EmailTelefono";
import Contrasena from "../components/Contrasena";
import Register from "../components/RegisterBtn";
import Login from "../components/LoginBtn";
import ContrasenaConfirma from "../components/confirmPassword";

function RegisterPage() {
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
            Create your account
          </h1>

          
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-gray-900 text-sm sm:text-base">
              Email or Phone Number
            </h3>
            <EmailTelefono />
          </div>

          
          <div className="mb-2">
            <h3 className="font-semibold mb-2 text-gray-900 text-sm sm:text-base">
              Create a Password
            </h3>
            <Contrasena />
          </div>

          <div className="mb-2">
            <h3 className="font-semibold mb-2 text-gray-900 text-sm sm:text-base">
              Confirm the Password
            </h3>
            <ContrasenaConfirma />
          </div>

         
          <button className="w-full bg-black text-white py-3 rounded-2xl text-lg font-medium hover:bg-gray-800 transition mt-4">
            Register
          </button>

          
          <p className="text-sm text-gray-600 mt-4 mb-2 text-center">
            Already have an account?
          </p>
          <div className="flex justify-center">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;