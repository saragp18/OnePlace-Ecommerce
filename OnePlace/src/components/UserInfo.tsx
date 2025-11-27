import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import LogOut from "./LogOutBtn";

function UserInfo() {
  const user = useSelector((state: RootState) => state.user.data);

  return (
    <div
      className="
          w-full md:w-fit 
          bg-gray-200 
          p-6 md:p-10 
          flex flex-col 
          md:min-h-full
        "
    >
      <h1 className="text-2xl font-semibold text-gray-800">
        {user?.name || user?.email || "Cargando..."}
      </h1>

      <div className="mt-4 space-y-1 text-gray-700">
        <h2>{user?.phone || ""}</h2>
        <h2>{user?.email || ""}</h2>
      </div>

      <div className="mt-8">
        <LogOut />
      </div>
    </div>
  );
}

export default UserInfo;