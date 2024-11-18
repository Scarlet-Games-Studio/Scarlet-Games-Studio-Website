if (typeof document !== 'undefined') {
  // Código que usa document
  
const galeryTeam = document.querySelector('.galery-team');
const numPhotos = 7;
const photoWidth = 354; // Largura da div + margens
const speed = 4; // Pixels por frame
//armazenar o width em uma variável do tamanho da janela "screen" 
const screen = window.screen.width;
//console.log("tamanho da janela é" + screen);
//pegar a posição x da screen e armazenar em uma variável
const x = window.screenX;
//console.log("a janela esta posicionada na cordenada x" + x);

let animationId; // ID da animação para pausá-la
let isPaused = false; // Variável para verificar se o carrossel está pausado

// Array para armazenar as divs
const photoArray = [];

const getphotoArray = [];
// Lista de classes para as redes sociais
const redesClasses = [
  'fa-youtube',
  'fa-tiktok',
  'fa-facebook',
  'fa-x-twitter',
  'fa-instagram',
  'fa-linkedin'
];

// Dicionário para armazenar as informações de nome e função de cada div
const teamInfo = {
  1: { nome: 'Jarod Silva', funcao: 'CEO/CTO', redes: ['https://youtube.com/jarod', 'https://tiktok.com/jarod', 'https://facebook.com/jarod', 'https://twitter.com/jarod', 'https://instagram.com/jarod', 'https://linkedin.com/in/jarod'] },
  2: { nome: 'Guilherme', funcao: 'Modelador 3D', redes: ['https://youtube.com/guilherme', 'https://tiktok.com/guilherme', 'https://facebook.com/guilherme', 'https://twitter.com/guilherme', 'https://instagram.com/guilherme', 'https://linkedin.com/in/guilherme'] },
  3: { nome: 'Ryan William', funcao: 'Art Productor', redes: ['https://youtube.com/ryan', 'https://tiktok.com/ryan', 'https://facebook.com/ryan', 'https://twitter.com/ryan', 'https://instagram.com/ryan', 'https://linkedin.com/in/ryan'] },
  4: { nome: 'Laura', funcao: 'Voice Artist', redes: ['https://youtube.com/laura', 'https://tiktok.com/laura', 'https://facebook.com/laura', 'https://twitter.com/laura', 'https://instagram.com/laura', 'https://linkedin.com/in/laura'] },
  5: { nome: 'Tiago Gomes', funcao: 'Artista 3D', redes: ['https://youtube.com/tiago', 'https://tiktok.com/tiago', 'https://facebook.com/tiago', 'https://twitter.com/tiago', 'https://instagram.com/tiago', 'https://linkedin.com/in/tiago'] },
  6: { nome: 'Joatham', funcao: 'Programador', redes: ['https://www.youtube.com/@ii_yhwh_ii', 'https://www.tiktok.com/@ii_yhwh_ii', 'https://www.facebook.com/II.YHWH.II', 'https://x.com/ii_YHWH_ii', 'https://instagram.com/silva_o_dev', 'https://www.linkedin.com/in/silva-joatham/'] },
  7: { nome: 'Rafael', funcao: 'Artista 2D', redes: ['https://youtube.com/rafael', 'https://tiktok.com/rafael', 'https://facebook.com/rafael', 'https://twitter.com/rafael', 'https://instagram.com/rafael', 'https://linkedin.com/in/rafael'] },
  8: { nome: 'Estephanie', funcao: 'Editora de Video', redes: ['https://youtube.com/rafael', 'https://tiktok.com/rafael', 'https://facebook.com/rafael', 'https://twitter.com/rafael', 'https://instagram.com/rafael', 'https://linkedin.com/in/rafael'] },
  //9: { nome: 'nome', funcao: 'Artista/Ilustrador' },
  //10: { nome: 'nome', funcao: 'Artista/Ilustrador' },
  // Adicione o restante das divs...
};


// Criação das divs dinâmicas dentro de `galery-team`
for (let i = 1; i <= numPhotos; i++) {
  const profile = teamInfo[i];
  const photoDiv = document.createElement('div');
  photoDiv.classList.add('deg-photo');

// Exibe a posição X no console
  // Adiciona um número como conteúdo para teste
  const text = document.createElement('p');
  text.style.color = "white";
  text.textContent = i;
/*console.log(`Div ${i} `); */
  // Adiciona o <p> ao photoDiv
  photoDiv.appendChild(text);

  //cria a div filha com a classe get-photo
  const getPhoto = document.createElement('div');
  getPhoto.classList.add('get-photo');

  // Adiciona a div filha ao photoDiv
  photoDiv.appendChild(getPhoto);

  // Cria a imagem dinâmica
  const img = document.createElement('img');
  img.classList.add('team-photo');
  img.src = `/assets/image/scarlet${i}.png`; // Substitua pelo caminho da imagem
  img.alt = `Imagem ${i}`;

  // Adiciona a imagem ao photoDiv
  getPhoto.appendChild(img);


  // Insere a div com a imagem dentro do contêiner principal
  galeryTeam.appendChild(photoDiv);

    // Adiciona a div ao array
    photoArray.push(photoDiv);

        // Obtém a posição da div em relação à janela e exibe no console
        const rect = photoDiv.getBoundingClientRect();
        /*console.log(`Div ${i} - Posição no eixo X: ${rect.x}, Largura: ${rect.width}`); */
    
         // Cria o popup para cada div, inicialmente oculto
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.classList.add('poppins-thin');
  popup.style.position = 'absolute';
  popup.style.bottom = '0'; // Define a posição no topo da div pai
  popup.style.width = '100%';
  popup.style.transform = 'skew(10deg)'
  //alinhas ao centro
  popup.style.textAlign = 'center';
  popup.style.color = 'white';
  popup.style.padding = '5px';
  popup.style.borderRadius = '5px';
  popup.style.display = 'none'; // Começa oculto


   // Cria o <ul> para cada popup
   const ulRedesPopup = document.createElement('ul');
   ulRedesPopup.classList.add('pers-social-list');
   ulRedesPopup.style.listStyleType = 'none';
   ulRedesPopup.style.padding = '0';
 
  
  // Adiciona o popup à `div` principal
  photoDiv.appendChild(popup);

  // Evento para mostrar o popup na parte superior da `div`
  photoDiv.addEventListener('mouseover', () => {
    popup.style.display = 'block';
  });

  // Evento para esconder o popup quando o mouse sai da div
  photoDiv.addEventListener('mouseout', () => {
    popup.style.display = 'none';
  });
//_______________________________________________________________
const namePopup = document.createElement('p');
namePopup.classList.add('name-popup');
//____________________________________________________________
const functionPopup = document.createElement('p');
functionPopup.classList.add('function-popup');
/*___________________________________________________________*/

/*___________________________________________________________*/

/*___________________________________________________________*/

 // Criação de 6 <li> com <i> para cada rede social
 for (let j = 0; j < 6; j++) {
  // Cria o elemento <i> para cada ícone de rede social
  const icone = document.createElement('a');
  icone.classList.add('fab','fa-size', redesClasses[j]); // Usa o array de classes para atribuir cada ícone
  icone.style.margin = '0 5px';

   
   icone.href = profile.redes[j]; // Usa o link correspondente da lista do perfil

   // __________________________________________________________
  // Cria o elemento <li> para cada ícone
  const li = document.createElement('li');
  li.classList.add('personal-social-icon');
  
  // Adiciona o ícone ao <li>
  li.appendChild(icone);

  // Adiciona o <li> ao <ul> do popup
  ulRedesPopup.appendChild(li);
}
/*________________________________________________________________*/


 // Define o conteúdo do popup com o nome e função
 const info = teamInfo[i];
namePopup.innerHTML = ` ${info.nome}`;
functionPopup.innerHTML = `${info.funcao}`;
 


 // Adiciona o popup à `div` principal
 popup.appendChild(namePopup);
 popup.appendChild(functionPopup);
 // Adiciona o <ul> ao popup
 popup.appendChild(ulRedesPopup);
 

 namePopup.addEventListener('mouseover', () => {
    popup.style.background = 'rgb(116, 17, 17)';
  });
  
  namePopup.addEventListener('mouseout', () => {
    popup.style.background = '#222';
  });
  //___________________________________________________________
  functionPopup.addEventListener('mouseover', () => {
    popup.style.background = '#d8d66fe1';
  });
  
  functionPopup.addEventListener('mouseout', () => {
    popup.style.background = '#222';
  });
      }
      
// Função para somar as larguras das últimas 9 divs
function sumLastNineWidths() {
    // Pega as últimas 9 divs do photoArray
    const lastNineDivs = photoArray.slice(-9); // slice pega os últimos 9 elementos

    // Soma as larguras das últimas 9 divs
    const totalWidth = lastNineDivs.reduce((acc, photoDiv) => {
        const rect = photoDiv.getBoundingClientRect(); // Obtém a posição da div
        return acc + rect.width; // Adiciona a largura da div ao acumulador
    }, 0);

    /*console.log(`A soma das larguras das últimas 9 divs é: ${totalWidth}`); */
}


// Função para iniciar o carrossel
function startCarousel() {
  const photoTeams = document.querySelectorAll('.deg-photo'); // Seleciona todas as divs dinâmicas
  const galleryWidth = galeryTeam.clientWidth; // Largura visível do contêiner principal


  // Inicializa as posições iniciais de cada photoDiv
  photoTeams.forEach((photoDiv, index) => {
    const initialPosition = index ; // Define a posição inicial em função do índice
    photoDiv.style.transform = `translateX(${initialPosition}px) skew(-10deg)`; // Inclui skew na posição inicial
  });

  // Função para mover as divs
  function animate() {
    
  
    // Supondo que você tenha uma referência para o elemento `photoDiv`
const photoDiv = document.querySelector('.deg-photo');
const galleryLeftPosition = galeryTeam.getBoundingClientRect().left; // Posição do contêiner no eixo X

// Obtém as coordenadas da `div` em relação à janela
const position = photoArray.map(photo => photo.getBoundingClientRect());

// Obtém a primeira div do array
const firstPhoto = photoArray[1];

// Obtém as coordenadas da primeira `div` em relação à janela
const pos = firstPhoto.getBoundingClientRect();

// Exibe a posição X e a largura de cada `div` no console
/*console.log(`Div - Posição no eixo X:`, pos.x);
    console.log(`Div - Largura da div:`, pos.width); */


/*position.forEach((position, index) => {
    console.log(`Div ${index + 1} - Posição no eixo X:`, position.x);
    console.log(`Div ${index + 1} - Largura da div:`, position.width);
  }); */
  for (let i = 0; i < photoArray.length; i++) {
    const photoIndex = photoArray[i]; // Obtém a div correspondente do array
    
    // Move cada photoDiv para a esquerda
    let currentPos = parseInt(photoIndex.style.transform.match(/translateX\((-?\d+)px\)/)[1]);
    currentPos -= speed;
    /*console.log("posição atual 'currentPos' da div " + i + ": " + currentPos); */
  
    
     // Obtém a posição da div em relação à janela e exibe no console
     const rect = photoIndex.getBoundingClientRect();
     /* console.log(`Div ${i + 1} - Posição no eixo X: ${rect.x}, Largura: ${rect.width}`);*/
     
      // Obter largura da tela
    const screenWidth = window.innerWidth;

    // Ajusta o comportamento baseado na largura da tela
    let repositionOffset; // Offset para reposicionar as divs

    if (screenWidth <= 720) {
        repositionOffset = 3182; // Ajuste para telas pequenas
    } else if (screenWidth <= 1400) {
        repositionOffset = 1512; // Ajuste para telas médias
    } else {
        repositionOffset = 2122; // Ajuste para telas grandes
    }

    // Reposiciona o elemento individualmente no final quando ele sair da tela
    if (rect.x <= -650) {
     
      // Calcula a posição final, somando a posição da última div com o comprimento total de uma div
      const lastPhotoPosition = parseInt(photoArray[photoArray.length - 1].style.transform.match(/translateX\((-?\d+)px\)/)[1]);
      currentPos = lastPhotoPosition + photoWidth + repositionOffset; 
      photoIndex.style.transition = 'none'; // Remove a transição para reposicionar instantaneamente
    } else {
      photoIndex.style.transition = 'transform 0.05s linear'; // Aplica a transição para movimento suave
    }
  
    // Mantém o skew durante o movimento
    photoIndex.style.transform = `translateX(${currentPos}px) skew(-10deg)`;
  }
  
   
    // Chama a animação continuamente
    animationId = requestAnimationFrame(animate);
  }
  function stopCarousel() {
    isPaused = true; // Pausa o carrossel
    cancelAnimationFrame(animationId); // Para a animação
  }
  function resumeCarousel() {
    isPaused = false; // Retoma o carrossel de onde parou
    startCarousel();
  }
  // Adiciona eventos de mouseover e mouseout para cada div
  photoArray.forEach(photoDiv => {
    photoDiv.addEventListener('mouseover', stopCarousel);
    photoDiv.addEventListener('mouseout', animate);
  });
  // Inicia a animação
  animate();
}

// Inicia o carrossel
startCarousel();



}
