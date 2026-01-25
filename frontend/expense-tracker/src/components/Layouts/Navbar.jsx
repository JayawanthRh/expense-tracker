import { useState } from "react";
import PropTypes from 'prop-types';
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className="flex gap-5 bg-white/20 backdrop-blur-xl border-b border-white/30 shadow-2xl shadow-black/10 py-5 px-7 sticky top-0 z-30">
      <button
        className="block lg:hidden text-white hover:text-purple-200 transition-colors duration-200"
        onClick={() => {
          setOpenSideMenu(!openSideMenu);
        }}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>

      <h2 className="text-xl font-bold text-white drop-shadow-2xl">💰 Expense Tracker</h2>

      {openSideMenu && (
        <div className="fixed top-[73px] -ml-4 bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/20 rounded-r-3xl">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

Navbar.propTypes = {
  activeMenu: PropTypes.string.isRequired,
};

export default Navbar;
