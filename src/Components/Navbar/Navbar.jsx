import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <header className="p-4">
      <div className="navbar bg-red-600 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Blogs</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
		  <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Blogs</a>
              </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          <Link to="/signin" className="btn">SignIn</Link>
          <Link to="/signup" className="btn">SignUp</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
