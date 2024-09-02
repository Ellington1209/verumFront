import React from 'react';
import LogoFooter from '../../../assets/logo-verum-digital-b-181x43.png';

export default function Footer() {
  return (
    <footer className="bg-[#1B102C] py-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={LogoFooter} alt="Logo Verum Digital" className="h-10" />
        </div>

        {/* Texto de direitos reservados */}
        <div className="text-white mt-4 md:mt-0 text-sm ml-5">
          © Copyright 2023/2024 - <span className="font-bold">Verum Digital</span> - Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
