// menuMobile.js (arquivo separado)
export const manipulateDOM = () => {
   // Seleciona os elementos
   const menuButton = document.getElementById('menu');
   const preMenu = document.querySelector('.pre-menu'); // Seleciona o primeiro elemento com a classe "pre-menu"
   let controlMenu = true;
   if (menuButton && preMenu) {
     console.log("Menu Button:", menuButton);
     console.log("Pre Menu:", preMenu);
 
    
   // Adiciona evento de clique ao botão do menu
   menuButton.addEventListener('click', () => {
    
     // Obtém o estilo computado do preMenu
     let currentDisplay = window.getComputedStyle(preMenu).display;
     console.log("script CLICK" + currentDisplay + ' : ' + preMenu.style.display + ' : ' + controlMenu );

     // Alterna entre os estilos de display
     if (controlMenu === true) {
       
       preMenu.style.display = 'block';
       
       preMenu.style.position = 'absolute';
       console.log("script apertado - ABERTO");
       controlMenu = false;
       return
     }
     
     else if (controlMenu === false ) {
       preMenu.style.display = 'none';
       console.log("script apertado - FECHADO");
       controlMenu = true;
       return
     } 
   });
 } else {
   console.error("Elementos não encontrados!");
 }
 
   // Cleanup: Remove o evento ao desmontar o componente
   return () => {
     if (menuButton) {
       menuButton.removeEventListener('click', () => {});
     }
   };
}
  console.log("script ACEITO");