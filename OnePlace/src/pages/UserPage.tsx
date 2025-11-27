import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchUser } from "../redux/user";
import Navbar from "../components/Navbar";
import UserInfo from "../components/UserInfo";

const UserPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) dispatch(fetchUser(userId));
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex flex-col md:flex-row flex-1">
        <UserInfo />

        <div className="flex-1 p-6 md:p-10"></div>
      </div>
    </div>
  );
};

export default UserPage;
