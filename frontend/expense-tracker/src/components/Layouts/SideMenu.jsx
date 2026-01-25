import { useContext } from "react";
import PropTypes from 'prop-types';
import { SIDE_MENU_DATA } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import CharAvatar from "../Cards/CharAvatar";

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === "logout") {
      handelLogout();
      return;
    }

    navigate(route);
  };

  const handelLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  return (
    <div className="w-64 h-[calc(100vh-73px)] bg-white/30 backdrop-blur-2xl border-r border-white/30 shadow-2xl shadow-black/10 p-5 sticky top-[73px] z-20">
      <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
        {user?.profileImageUrl ? (
          <img
            src={user?.profileImageUrl || ""}
            alt="Profile Image"
            className="w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full shadow-xl shadow-purple-500/30 ring-4 ring-white/50"
          />
        ) : (
          <CharAvatar
            fullName={user.fullName}
            width="w-20"
            height="h-20"
            style="text-xl"
          />
        )}

        <h5 className="text-white text-lg font-bold leading-6 drop-shadow-xl">
          {user.fullName || ""}
        </h5>
      </div>

      {SIDE_MENU_DATA.map((item, index) => (
        <button
          key={`menu_${index}`}
          className={`w-full flex items-center gap-4 text-[15px] font-bold ${
            activeMenu == item.label 
              ? "text-white bg-gradient-to-r from-purple-500 to-indigo-600 shadow-xl shadow-purple-500/40" 
              : "text-white hover:bg-white/20"
          } py-3 px-6 rounded-xl mb-3 transition-all duration-200 hover:scale-105 backdrop-blur-sm`}
          onClick={() => handleClick(item.path)}
        >
          <item.icon className="text-xl" />
          {item.label}
        </button>
      ))}
    </div>
  );
};

SideMenu.propTypes = {
  activeMenu: PropTypes.string.isRequired,
};

export default SideMenu;
