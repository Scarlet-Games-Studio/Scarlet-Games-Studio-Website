import React from 'react';
import { createRoot } from 'react-dom/client'; // Importando createRoot
//import Header from 'src/Header';
import Header from './components/header/header.js';
import SectionVideo from './components/sections/sectionOne.js';
import Footer from './components/footer/footer.js';
import Form from './components/formulario/formulario.js';
import Carrousel from './components/carrousel/carrousel.js';
import MobileMenu from './components/header/menuMobile.js';


if (typeof document !== 'undefined') {
  // Código que usa document
  
document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  const sectionVideoElement = document.getElementById('sectionvideo');
  const footerElement = document.getElementById('footer-section');
  const formElement = document.getElementById('form-contact');


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
  /*   // Criando a raiz para o SectionVideo
   const renderForm = createRoot(formElement);
   renderForm.render(
     <React.StrictMode>
       <Form />
     </React.StrictMode>
   );*/
 });
}
  