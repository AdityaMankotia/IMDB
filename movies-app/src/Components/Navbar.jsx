import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-gray-900 p-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <img className='w-[100px] h-auto' src={Logo} alt="Logo" />
        </Link>
        <div className='hidden md:flex space-x-8'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `text-white text-lg font-semibold hover:text-blue-300 transition duration-200 ${isActive ? 'underline' : ''}`
            }
          >
            Movies
          </NavLink>
          <NavLink
            to='/watchlist'
            className={({ isActive }) =>
              `text-white text-lg font-semibold hover:text-blue-300 transition duration-200 ${isActive ? 'underline' : ''}`
            }
          >
            Watchlist
          </NavLink>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white focus:outline-none' aria-label="Menu">
            <i className="fas fa-bars fa-lg"></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className='md:hidden bg-gray-800 mt-2 p-4 rounded-lg'>
          <NavLink
            to='/'
            className='block text-white py-2 hover:text-blue-300 transition duration-200'
            onClick={() => setMenuOpen(false)}
          >
            Movies
          </NavLink>
          <NavLink
            to='/watchlist'
            className='block text-white py-2 hover:text-blue-300 transition duration-200'
            onClick={() => setMenuOpen(false)}
          >
            Watchlist
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
