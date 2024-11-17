import React from 'react';
import { createRoot } from 'react-dom/client'; // Importando createRoot
//import Header from 'src/Header';
import Header from './src/components/header/header.js';
import SectionVideo from './src/components/sections/sectionOne.js';
import Footer from './src/components/footer/footer.js';
import Carrousel from './src/components/carrousel/carrousel.js';
import MobileMenu from './src/components/header/menuMobile.js';


if (typeof document !== 'undefined') {
  // Código que usa document
  
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  const sectionVideoElement = document.getElementById('sectionvideo');
  const footerElement = document.getElementById('footer-section');


   // Criando a raiz para o Header
   const root = createRoot(rootElement);
   root.render(
     <React.StrictMode>
       <Header />
     </React.StrictMode>
   );
 
   // Criando a raiz para o SectionVideo
   const sectionVideoRoot = createRoot(sectionVideoElement);
   sectionVideoRoot.render(
     <React.StrictMode>
       <SectionVideo />
     </React.StrictMode>
   );
 
    // Criando a raiz para o SectionVideo
    const footerRoot = createRoot(footerElement);
    footerRoot.render(
      <React.StrictMode>
        <Footer />
      </React.StrictMode>
    );
 });
}
  