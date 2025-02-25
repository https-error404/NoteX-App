import { NavbarData } from "../NavbarData/Navbar";
import { NavLink } from "react-router-dom";
import NotexLogo from "../assets/NotexLogo2.png";


const Navbar = () => {
  return (
    <div className="w-full h-[65px] flex justify-between items-center px-8 bg-white shadow-md">
      {/* Logo */}
      <div className="hidden sm:block">
        <img src={NotexLogo} alt="logo" className="h-14 w-36 hover:cursor-pointer"/>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-x-6 text-black">
        {NavbarData.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-semibold text-lg"
                : "text-gray-700 font-semibold text-lg hover:text-gray-500"
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>

      {/* Login/Sign Up Button */}
      <NavLink to="/login" className="hidden sm:block">
        <button className="px-4 py-[0.39rem] border text-blue-600 rounded-md hover:bg-blue-100">
          Sign in
        </button>
      </NavLink>
    </div>
  );
};

export default Navbar;
