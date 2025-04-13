


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },

    { name: 'Sign Up', path: '/pages' },

  ];

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-emerald-600">MediCare</div>

    
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-emerald-700 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      
        <div className="hidden md:flex space-x-6 items-center text-lg font-medium" onClick={()=>scrollTo(0,0)}>
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-blue-500 ${isActive ? 'text-blue-500' : ''}` 
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/appointments">
            <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Appointment
            </button>
          </NavLink>
        </div>
      </div>

    
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 text-lg">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block hover:text-blue-500 ${isActive ? 'text-blue-500' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/appointments">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Appointment
            </button>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
