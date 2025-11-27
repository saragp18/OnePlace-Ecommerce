
import { NavLink } from "react-router-dom";

function ViewAllBtn() {
  return (
    <NavLink to="/collection">
    <button className="px-8 py-3 border border-gray-300 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all duration-300">
      VIEW ALL
    </button>
    </NavLink>
  );
}

export default ViewAllBtn;