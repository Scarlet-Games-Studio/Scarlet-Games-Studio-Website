import React from 'react';
import './footer.css';
//import IconScarlet from '../../public/assets/image/IconScarlet.png';


const Footer = () => {
  
    return (
       
        //<!--_______________FOOTER__________________-->
        <footer className="fot">
        <div className="padd-footer">
            
                
            <div className=" top-fot">
                <ul className='fot-list'>
                    <li className="fot-content-list">
                        <img className="i-scarlet" src='assets/image/IconScarlet.png' alt="Icon Scarlet" />
                    </li>
                    <li className="fot-content-list">
                    <p>IMPRENSA</p>
                    </li>
                    <li className="fot-content-list">
                    <p>SEGURANÇA</p>
                    </li>
                    <li className="fot-content-list">
                    <p>JURIDICO</p>
                    </li>
                    <li className="fot-content-list">
                    <p>TRABALHE CONOSCO</p>
                    </li>
                    <li className="fot-content-list">
                    <p>TERMOS DE SERVIÇO</p>
                    </li>
                    <li className="fot-content-list">
                    <p>POLITICA DE PRIVACIDADE</p>
                    </li>
                    <li className="fot-content-list">
                    <p>SUPORTE AO JOGADOR</p>
                    </li>
                    <li className="fot-content-list">
                    <p>E-VERIFY</p>
                    </li>
                    <li className="fot-content-list">
                    <p>ACESSIBILIDADE</p>
                    </li>
                </ul>
                <ul className='social-list'>
                    <li className="fot-social-list">
                    <a href='https://www.facebook.com/Scarlet.Studio.ti'><i className="fab fa-facebook fa-size"></i></a>
                    </li>
                    <li className="fot-social-list">
                    <i className="fab fa-x-twitter fa-size"></i>
                    </li>
                    <li className="fot-social-list">
                    <a href='https://www.instagram.com/scarlet_games.studio?igsh=MW5sb2cwZmd4bTU5MA%3D%3D'><i className="fab fa-instagram fa-size"></i></a>
                    </li>
                    <li className="fot-social-list">
                    <a href='https://www.linkedin.com/company/scarlet-games-studio/?viewAsMember=true'><i className="fab fa-linkedin fa-size"></i></a>
                    </li>
                    <li className="fot-social-list">
                    <a href='https://www.youtube.com/@scarletgamesstudio?si=FmiDFYHq-wcwDyyY'><i className="fab fa-youtube fa-size"></i></a>
                    </li>
                    <li className="fot-social-list">
                    <a href='https://discord.gg/9Za4XXqTus'><i class="fab fa-discord fa-size"></i></a>
                    </li>
                </ul>
            </div>
            <div className="bot-fot">
                    <a href="https://www.scarletgames.com/" target="_blank" rel="noopener noreferrer">Preferencias de cookies</a>
                    <div class="separator"></div>
                    <p>&copy; 2024, Scarlet Games, Inc. Todos os direitos reservados</p>
                    <div class="separator"></div>
                <div >
                    <a href="#sectionvideo" >voltar ao topo</a>
                    </div>
            </div>
        </div>
    
    </footer>
    );
  };
  
  export default Footer;
  