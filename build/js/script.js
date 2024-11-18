// Função para criar os dots dinamicamente
function createDots() {
    // Obtém o elemento onde os dots serão inseridos
    const carouselDots = document.querySelector('.carousel-dots');
    
    // Limpa os dots existentes
    carouselDots.innerHTML = '';

    // Obtém a largura da janela
    const windowWidth = window.innerWidth;

    let numDots = 0;

    // Define o número de dots com base na largura da janela
    if (windowWidth <= 720) {
        numDots = 6;
    } else if (windowWidth > 720 && windowWidth <= 1400) {
        numDots = 3;
    } else if (windowWidth > 1400 && windowWidth <= 2000) {
        numDots = 2;
    }

        // Cria um array para armazenar os dots
        const dotsArray = [];

    // Cria os dots dinamicamente
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.id = `dot${i + 1}`; // Adiciona um ID único para cada dot
        carouselDots.appendChild(dot);
        // Adiciona o dot ao array
        dotsArray.push(dot);
    }

    // Atualiza a navegação (se necessário)
    document.addEventListener('DOMContentLoaded', function () {
        updateDots();  // Chama a função para criar os dots quando o DOM estiver pronto
    });// Função que atualiza a classe ativa dos dots
}

// Função para atualizar a classe 'active' nos dots
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    
    // Remover a classe 'active' de todos os dots
    dots.forEach(dot => dot.classList.remove('active'));

    // Adiciona a classe 'active' no dot atual
    if (dots.length > 0) {
        dots[currentPage].classList.add('active');
    }
}

// Chama a função quando a página é carregada e sempre que o tamanho da tela mudar
window.addEventListener('load', createDots);
window.addEventListener('resize', createDots); // Recria os dots a cada redimensionamento


// Variáveis de controle do carrossel
let currentPage = 0; // A primeira página é 0
const totalPages = 5; // Exemplo, ajuste conforme o número de páginas do carrossel


// Exemplo de navegação com os dots
document.querySelector('.carousel-dots').addEventListener('click', function (event) {
    if (event.target.classList.contains('dot')) {
        currentPage = parseInt(event.target.id.replace('dot', '')) - 1;
        document.addEventListener('DOMContentLoaded', function () {
            updateCarousel();
            updateDots(); // Chama a função para criar os dots quando o DOM estiver pronto
        });
        
    }
});
//variaveis
var backgroundColors = ['#ff4655', '#34a853', '#4285f4'];





//let currentPage = 0; // A primeira página é 0 (primeiros 3 itens)
//const //totalPages = 1; // Há apenas 2 "páginas" (0 e 1)
const carousel = document.querySelector('.margin-our-sev');
const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const arrowRight = document.getElementById('arrowRight');
const arrowLeft = document.getElementById('arrowLeft');


// Função comum para o clique do arrowLeft e dot2
function handleCarouselNavigationLeft() {
    if (currentPage > 0) {
        currentPage--;
        updateCarousel();
    }
}

function handleCarouselNavigationRight() {
    if (currentPage < totalPages) {
        currentPage++;
        updateCarousel();
    }
}

/*
arrowRight.addEventListener('click', function () {
    if (currentPage < totalPages) {
        currentPage++;
        updateCarousel();
    }
});
*/

// Adiciona o evento tanto ao arrowLeft quanto ao dot2
arrowLeft.addEventListener('click', handleCarouselNavigationLeft);
dot1.addEventListener('click', handleCarouselNavigationLeft);
// Adiciona o evento tanto ao arrowLeft quanto ao dot2
arrowRight.addEventListener('click', handleCarouselNavigationRight);
dot2.addEventListener('click', handleCarouselNavigationRight);

function updateCarousel() {
    const windowWidth = window.innerWidth; // Obtém a largura da janela
    
    let offset = -currentPage * 17; // Move 10% para a esquerda ou direita
    // Verifica o tamanho da tela e ajusta o valor do offset
    if (windowWidth <= 720) {
        offset = -currentPage * 17;  // Move 17% para a esquerda ou direita
    }else if (windowWidth > 721 && windowWidth <= 1400) {
        offset = -currentPage * 35;  // Move 100% para a esquerda
    }  
    else if (windowWidth > 1401 && windowWidth <= 2000) {
        offset = -currentPage * 50;  // Move 100% para a esquerda
    } 
// Aplica o offset ao carrossel
carousel.style.transform = `translateX(${offset}%)`;

updateDots(); // Atualiza as bolinhas de navegação    
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    
    // Verificar se os dots existem antes de tentar manipulá-los
    if (dots.length > 0) {
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Adiciona a classe 'active' no dot atual, se existir
        if (dots[currentPage]) {
            dots[currentPage].classList.add('active');
        }
    }

    // Se você precisar garantir que 'dot1', 'dot2', etc., sejam manipulados especificamente
    if (dots.length > 0) {
        if (currentPage === 0 && dots[0]) {
            dots[0].classList.add('active');
        } else if (currentPage === 1 && dots[1]) {
            dots[1].classList.add('active');
        } else if (currentPage === 2 && dots[2]) {
            dots[2].classList.add('active');
        } else if (currentPage === 3 && dots[3]) {
            dots[3].classList.add('active');
        } else if (currentPage === 4 && dots[4]) {
            dots[4].classList.add('active');
        } else if (currentPage === 5 && dots[5]) {
            dots[5].classList.add('active');
        }
    }
}

// Definir o estado inicial das bolinhas
updateDots();



// ________________________________________________________________________________
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');

    // Verifica se o scroll é maior que 50px (ajuste conforme necessário)
    if (window.scrollY > 50) {
        header.classList.add('scrolled'); // Adiciona a classe "scrolled"
    } else {
        header.classList.remove('scrolled'); // Remove a classe "scrolled"
    }
});

//_____________________________________________________________________________

var socialIcon = document.querySelector('.social-icon');

if (socialIcon) {
    socialIcon.style.transform = 'rotate(45deg)'; // Exemplo de transformação
} else {
    console.error('O elemento com a classe .social-icon não foi encontrado.');
}

//____________________________________________________________________________
