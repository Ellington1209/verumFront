import React, { useState } from 'react';
import ImgSecao from '../../../assets/digital-secao-02a-1920x1959.jpg';
import ImgVIdeo from '../../../assets/video-1110x530.jpg';
import { FaYoutube } from 'react-icons/fa'; // Ícone do YouTube

export default function QuemSomos() {
  // Estado para controlar o hover e o clique
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      className="relative w-full bg-cover bg-center py-16 px-6 md:px-12 lg:px-24"
      style={{
        backgroundImage: `url(${ImgSecao})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center min-h-screen text-white">
        {/* Container do vídeo */}
        <div
          className="w-full lg:w-1/2 mb-8 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {!isPlaying ? (
            <>
              {/* Imagem de capa do vídeo */}
              <img
                src={ImgVIdeo}
                alt="Capa do vídeo"
                className="w-full h-auto object-cover"
              />

              {/* Botão com o ícone do YouTube */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className={`flex items-center justify-center bg-black ${isHovered ? 'bg-red-600' : 'bg-black'} transition duration-300`}
                  onClick={() => setIsPlaying(true)}
                  style={{ width: '60px', height: '60px', borderRadius: '8px' }} // Botão quadrado com bordas levemente arredondadas
                >
                  <FaYoutube 
                    className={`text-white text-3xl transition duration-300`}
                    style={{ width: '40px', height: '40px' }} // Ícone menor para criar o efeito de contorno
                  />
                </button>
              </div>
            </>
          ) : (
            <iframe
              className="w-full h-64 lg:h-96"
              src="https://www.youtube.com/embed/uVXAfMlZI1s?autoplay=1&si=FXDQqhKFWOYzJ4r-"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {/* Texto da seção */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Então, surgiu o Fluit!
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">
            Usando metodologia AWP, o Fluit concentra todas as informações em um só lugar,
            oferecendo uma visão integrada e estratégica para a execução do seu projeto.
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            É a tecnologia que faltava na sua obra!
          </h3>
          <ul className="text-left text-lg md:text-xl lg:text-1xl text-white list-disc list-inside space-y-2 lg:ml-44">
            <li>Plataforma digital eficiente e integrada;</li>
            <li>Aumento da produtividade do projeto;</li>
            <li>Padronização e fácil controle;</li>
            <li>Metodologia AWP para garantir a excelência em todas as etapas;</li>
            <li>Melhor gerenciamento de riscos;</li>
            <li>Comunicação facilitada com stakeholders;</li>
            <li>Tomada de decisão mais rápida;</li>
            <li>Governança colaborativa;</li>
            <li>Visão geral do projeto que possibilita replicar as boas práticas.</li>
          </ul>

          {/* Botão de ação */}
          <div className="w-full flex justify-center mt-8">
            <button className="bg-white text-purple-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
              Quero explorar o Fluit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
