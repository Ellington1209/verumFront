// src/pages/Home.jsx
import React, { useRef } from 'react'; // Certifique-se de importar useRef
import { Cabecalho, Fluit, Header, QuemSomos } from '../../components';
import Footer from '../../components/landPage/footer';

function Home() {
  const fluitRef = useRef(null);
  const quemSomosRef = useRef(null); // Nova referência para Quem Somos

  const handleScroll = (section) => {
    switch (section) {
      case 'fluit':
        if (fluitRef.current) {
          fluitRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'quemSomos':
        if (quemSomosRef.current) {
          quemSomosRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      default:
        break;
    }
  };

  return (
    <div >     
      <Header handleScroll={handleScroll} />
      <Cabecalho />    
      <div ref={fluitRef}>
        <Fluit />
      </div>
      <div ref={quemSomosRef}>
        <QuemSomos />
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
