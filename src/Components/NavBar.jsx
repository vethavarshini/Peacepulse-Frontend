import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <nav className="navbar bg-gray-800 bg-opacity-95 absolute top-0 left-0 p-4 z-10 flex items-center justify-between w-full">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white px-4 py-2 border border-white bg-gradient-to-r from-green-400 to-green-600/75 rounded hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700/75 font-semibold">
            Home
          </Link>
        </li>
        <li>
          <Link to="/stress" className="text-white px-4 py-2 bg-gradient-to-r from-green-400 to-green-600/75 rounded border border-transparent border-white font-semibold">
            Stress & Anxiety
          </Link>
        </li>
        <li>
          <ScrollLink to="MainContact" smooth={true} duration={500} className="text-white px-4 py-2 bg-gradient-to-r from-green-400 to-green-600/75 border border-white rounded hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700/75 font-semibold cursor-pointer">
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="Contact" smooth={true} duration={500} className="text-white px-4 py-2 border border-white bg-gradient-to-r from-green-400 to-green-600/75 rounded hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700/75 font-semibold cursor-pointer">
            Contact
          </ScrollLink>
        </li>
      </ul>
      <div className="ml-auto">
        {isAuthenticated ? (
          <button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            className="px-4 py-2 border border-white bg-gradient-to-r from-green-400 to-green-600/75 text-white rounded hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700/75 font-semibold"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={loginWithRedirect}
            className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-600/75 text-white rounded hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700/75 font-semibold"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
