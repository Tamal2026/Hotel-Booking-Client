import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/rooms">Rooms</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>

      {user?.email ? (
        <>
          <li>
            <NavLink to="/mybookings">My Bookings</NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>LogOut</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
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
          <img
            className="w-[120px] h-[120px]"
            src="https://i.ibb.co/pJZ4yPd/main-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end flex items-center">
          {user?.email ? (
            <div className="flex items-center">
              <img
                src={user.photoURL}
                alt="user-profile"
                className="rounded-full h-10 w-10 mr-2"
              />
              <p className="text-sm">{user.displayName}</p>
            </div>
          ) : <p></p>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
