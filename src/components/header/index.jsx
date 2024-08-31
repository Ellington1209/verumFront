import React from 'react';
import Logo from '../../assets/logo-verum.png';

export default function Header() {
  // Array de links para o menu de navegação
  const navLinks = [
    { href: '#', label: 'Fluit' },
    { href: '#', label: 'Quem Somos' },
    { href: '#', label: 'Seja um dos primeiros!' },
    { href: '#', label: 'Baixe o E-book' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <img src={Logo} className="h-12" alt="Logo" />

        {/* Botão para dispositivos móveis */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
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

        {/* Navbar Links */}
        <div className="hidden w-full md:flex md:items-center md:justify-center" id="navbar-default">
          <ul className="flex flex-col md:flex-row md:space-x-4 items-center">
            {navLinks.map((link, index) => (
              <li key={index} className="flex items-center">
                <a
                  href={link.href}
                  className="py-2 px-3 text-purple-700 text-[19px] hover:text-purple-500"
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
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#" className="text-purple-700 hover:text-purple-500">
            <i className="fab fa-instagram"></i> {/* Substitua pelos ícones reais */}
          </a>
          <a href="#" className="text-purple-700 hover:text-purple-500">
            <i className="fab fa-facebook"></i> {/* Substitua pelos ícones reais */}
          </a>
          <a href="#" className="text-purple-700 hover:text-purple-500">
            <i className="fab fa-linkedin"></i> {/* Substitua pelos ícones reais */}
          </a>
        </div>
      </div>
    </nav>
  );
}
