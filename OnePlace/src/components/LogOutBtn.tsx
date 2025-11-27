import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout as logoutAction } from "../type/userSlice";
import type { AppDispatch } from "../redux/store";

function LogOut() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear local storage and redux user state
    localStorage.removeItem("userId");
    dispatch(logoutAction());
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-8 py-3 border border-gray-300 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-800 hover:text-white transition-all duration-300"
    >
      Log Out
    </button>
  );
}

export default LogOut;