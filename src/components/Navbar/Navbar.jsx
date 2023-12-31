import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log( user.photoURL);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-transparent bg-clip-text bg-gradient-to-br from-[#DEBB50] to-[#B57F12] font-medium text-lg"
              : "font-medium text-lg text-gray-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-transparent bg-clip-text bg-gradient-to-br from-[#DEBB50] to-[#B57F12] font-medium text-lg"
              : "font-medium text-lg text-gray-500"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-transparent bg-clip-text bg-gradient-to-br from-[#DEBB50] to-[#B57F12] font-medium text-lg"
              : "font-medium text-lg text-gray-500"
          }
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/vip_events"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-transparent bg-clip-text bg-gradient-to-br from-[#DEBB50] to-[#B57F12] font-medium text-lg"
              : "font-medium text-lg text-gray-500"
          }
        >
          VIP Events
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-transparent bg-clip-text bg-gradient-to-br from-[#DEBB50] to-[#B57F12] font-medium text-lg"
              : "font-medium text-lg text-gray-500"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="navbar lg:max-w-6xl mx-auto py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#DEBB50] to-[#B57F12]"
        >
          EVENTA
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-6">{navLinks}</ul>
      </div>
      <div className="navbar-end">
      <div>
          {user && <p className="text-gray-700 hidden md:block">{user.displayName}</p>}
        </div>
        <label tabIndex={0} className="avatar mx-2">
          <div className="w-8 rounded-full">
            {user && <img src={user.photoURL} />}
          </div>
        </label>
        {user ? (
          <button onClick={handleSignOut} className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#DEBB50] to-[#B57F12]">
            Sign Out
          </button>
        ) : (
          <Link to="/login">
            <button className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#DEBB50] to-[#B57F12]">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
