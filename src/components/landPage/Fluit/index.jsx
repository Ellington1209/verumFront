import React from 'react';
import ImgSecao from '../../../assets/digital-secao-01-1920x818.jpg';

export default function Fluit() {
  return (
    <section 
      className="relative w-full bg-white py-16 px-6 md:px-12 lg:px-24"
      style={{
        backgroundImage: `url(${ImgSecao})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', 
      }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center min-h-screen text-center">
        
        {/* Conteúdo da seção */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-verum-purple mb-4">
            Bem-vindo a Verum Digital!
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-6">
            A nossa missão: promover a colaboração!
          </h3>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-8">
            A <strong>Verum Digital</strong> nasceu para facilitar a vida dos seus projetos, com soluções criativas e eficientes. <strong>Você está pronto para o futuro?</strong>
          </p>

          <h3 className="text-2xl md:text-4xl lg:text-4xl font-extrabold text-verum-purple mb-4">
            A excelência digital é essencial hoje!
          </h3>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-6">
            Nosso objetivo é <strong>transformar projetos</strong> e impulsionar o futuro por meio da inovação digital.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-800">
            Buscamos a excelência em tudo o que fazemos e trazemos soluções inovadoras e estratégicas para impulsionar o sucesso do projeto e crescimento do negócio. Com metodologias eficazes e uma visão abrangente e completa, nós podemos ajudar a otimizar seus projetos!
          </p>
        </div>
      </div>
    </section>
  );
}
