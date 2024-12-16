import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import logo from "../assets/logo.png"


const Navbar = () => {

  const { user, userLogOut } = useContext(AuthContext);

  const handleUserLogOut = () => {
    userLogOut()
    .then(result => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
  }

    const links = (
      <div className="lg:flex items-center gap-6">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/my_applications">MY Applications</NavLink>
        </li>
        <li>
          <NavLink to="/add_job">Add Job</NavLink>
        </li>
        <li>
          <NavLink to="/my_posted_jobs">My Posted Jobs</NavLink>
        </li>
      </div>
    );

    return (
      <div className="navbar py-6 bg-white mb-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content bg-gray-900 rounded-box z-[1] mt-6 w-60 p-2 shadow text-white"
            >
              {links}
            </ul>
          </div>
          <div className="md:flex items-center gap-1 text-lg md:text-3xl font-bold hidden">
            <img src={logo} className="w-12" alt="" />
            <span className="uppercase text-blue-950">Job Portal</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px- gap-6 text-base ">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button
                onClick={handleUserLogOut}
                className="py-2 px-6 md:text-lg rounded-lg bg-purple-700 text-white cursor-pointer font-semibold hover:bg-purple-600"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <button>
                <Link
                  to="/register"
                  className="py-2 px-6 md:text-lg text-purple-600 underline cursor-pointer font-semibold"
                >
                  Register
                </Link>
              </button>
              <button>
                <Link
                  to="/login"
                  className="py-2 px-6 md:text-lg rounded-lg bg-purple-700 text-white cursor-pointer font-semibold hover:bg-purple-600"
                >
                  Log In
                </Link>
              </button>
            </>
          )}
        </div>
      </div>
    );
};

export default Navbar;