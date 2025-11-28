import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { fetchUser } from "../type/userSlice";
import Navbar from "../components/Navbar";
import UserInfo from "../components/UserInfo";
import UserListings from "../components/UserListings";

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

        <UserListings />
      </div>
    </div>
  );
};

export default UserPage;
