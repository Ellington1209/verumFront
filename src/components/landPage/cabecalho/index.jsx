import React from 'react';
import Banner from '../../../assets/digital-banner-1920x720.jpg';
import BannerMobile from '../../../assets/digital-banner-767x635.jpg';

export default function Cabecalho() {
  return (
    <div className="relative ">
      {/* Imagem do Banner para Desktop */}
      <div className="hidden md:block relative mt-20 ">
        <img
          src={Banner}
          className="object-contain opacity-80"
          alt="banner"
        />

        {/* Texto sobre o Banner */}
        <div className="absolute inset-0 flex flex-col  items-center justify-center p-8 md:p-20 bg-black bg-opacity-10">
          {/* Título dividido conforme necessário */}
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight ml-16">
            O Futuro <span className="font-normal">da</span>
          </h1>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mt-2 ml-16">
            Engenharia
          </h1>
          <h1 className="text-white text-4xl md:text-5xl font-normal leading-tight mt-2 ml-4">
            está aqui!
          </h1>

          {/* Parágrafo conforme imagem fornecida */}
          <p className="text-white mt-4 text-lg md:text-xl font-medium ml-24">
            Vem aí um <span className="font-bold">grande salto</span> <br />
            para o mercado da construção <br />
            e você pode ser um dos primeiros <br />
            a ter mais informações!
          </p>

          {/* Botão centralizado */}
          <button className="mt-8 bg-white text-verum-purple font-bold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            Saiba mais
          </button>
        </div>

      </div>

      {/* Imagem do Banner e Texto para Mobile */}
      <div className="block md:hidden">
        {/* Imagem de banner */}
        <img
          src={BannerMobile}
          className="w-full h-auto mt-20 object-contain"
          alt="banner"
        />

        {/* Texto abaixo da imagem para mobile */}
        <div className="flex flex-col items-start justify-center p-4 bg-purple-700 mt-0 text-left">
          {/* Título dividido conforme necessário */}
          <h1 className="text-white text-3xl font-extrabold leading-tight">
            O Futuro <span className="font-normal">da</span>
          </h1>
          <h1 className="text-white text-3xl font-extrabold leading-tight mt-1">
            Engenharia
          </h1>
          <h1 className="text-white text-3xl font-normal leading-tight mt-1">
            está aqui!
          </h1>

          {/* Parágrafo conforme imagem fornecida */}
          <p className="text-white mt-4 text-lg font-medium">
            Vem aí um <span className="font-extrabold">grande salto</span> <br />
            <span className="font-extrabold">para o mercado da construção</span> <br />
            e você pode ser um dos primeiros <br />
            a ter mais informações!
          </p>

          {/* Botão centralizado */}
          <div className="w-full flex justify-center">
            <button className="mt-8 bg-white text-verum-purple font-bold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
