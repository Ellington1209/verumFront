import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Logo from '../../../assets/logo-verum.png';

export default function Header({ handleScroll }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#', label: 'Fluit', section: 'fluit' },
    { href: '#', label: 'Quem Somos', section: 'quemSomos' },
    { href: '#', label: 'Seja um dos primeiros!' },
    { href: '#', label: 'Baixe o E-book' },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
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

        {/* Navbar Links para Desktop e Mobile */}
        <div
          className={`w-full ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-center bg-purple-700 md:bg-transparent`}
          id="navbar-default"
        >
           <ul className="flex flex-col md:flex-row items-center md:bg-transparent text-verum-purple md:p-0 p-4">
            {navLinks.map((link, index) => (
              <li key={index} className="w-full md:w-auto flex items-center">
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault(); 
                    if (link.section) {
                      handleScroll(link.section); 
                    }
                  }}
                  className="block w-full py-2 px-3 text-white md:text-verum-purple text-[19px] md:hover:bg-transparent hover:bg-black md:hover:text-gray-900 hover:text-white font-medium transition duration-300 ease-in-out"
                >
                  {link.label}
                </a>
                {index < navLinks.length - 1 && (
                  <span className="hidden md:inline-block mx-2 text-verum-purple">|</span>
                )}
              </li>
            ))}
          </ul>

          {/* Ícones de Redes Sociais - Exibidos apenas quando o menu estiver aberto no mobile */}
          <div className={`flex space-x-4 items-center mt-4 mb-4 ${isOpen ? 'block' : 'hidden'} md:flex`}>
            <a href="#" className="text-white md:text-verum-purple hover:text-gray-900 ml-4 ">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-white md:text-verum-purple hover:text-gray-900">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-white md:text-verum-purple hover:text-gray-900">
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
