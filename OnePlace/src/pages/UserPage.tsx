import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { fetchUser } from "../type/userSlice"; // Acción para obtener info del usuario
import Navbar from "../components/Navbar"; // Navbar superior
import UserInfo from "../components/UserInfo"; // Muestra la información del usuario
import UserListings from "../components/UserListings"; // Muestra los productos/listados del usuario


const UserPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Inicializa dispatch para redux

  useEffect(() => {
    const userId = localStorage.getItem("userId"); // Busca el ID del usuario guardado
    if (userId) dispatch(fetchUser(userId)); // Si existe, carga su información
  }, [dispatch]); // Se ejecuta una vez al montar el componente

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex flex-col md:flex-row flex-1">
        <UserInfo />

        <UserListings />
      </div>
    </div>
  );
};

export default UserPage;
