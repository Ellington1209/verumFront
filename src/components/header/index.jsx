import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Logo from '../../assets/logo-verum.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#', label: 'Fluit' },
    { href: '#', label: 'Quem Somos' },
    { href: '#', label: 'Seja um dos primeiros!' },
    { href: '#', label: 'Baixe o E-book' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto p-4">
        {/* Logo e Botão do Menu */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo */}
          <img src={Logo} className="h-12" alt="Logo" />
          
          {/* Botão para dispositivos móveis */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links para Desktop */}
        <div className={`w-full ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-center bg-purple-700 md:bg-transparent`} id="navbar-default">
          <ul className="flex flex-col md:flex-row items-center md:bg-transparent bg-purple-700 md:p-0 p-4">
            {navLinks.map((link, index) => (
              <li key={index} className="w-full md:w-auto flex items-center">
                <a
                  href={link.href}
                  className="block w-full py-2 px-3 text-white md:text-purple-700 text-[19px] hover:bg-black hover:text-white font-medium"
                >
                  {link.label}
                </a>
                {index < navLinks.length - 1 && (
                  <span className="hidden md:inline-block mx-2 text-purple-700">|</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Ícones de Redes Sociais */}
        <div className="flex space-x-4 items-center mt-4 md:mt-0">
          <a href="#" className="text-purple-700 hover:text-gray-900">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-purple-700 hover:text-gray-900">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-purple-700 hover:text-gray-900">
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </nav>
  );
}
