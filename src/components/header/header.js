import React, { useState, useRef, useEffect } from 'react';
import './header.css';
import IconScarlet from '../../../public/assets/image/IconScarlet.png';
import NomeScarletGames from '../../../public/assets/image/ScarletGamesStudio.png';
import { manipulateDOM } from './menuMobile';  // Importa o arquivo JS separado

const Header = () => {
  const [inputValue, setInputValue] = useState('');
 
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  
  useEffect(() => {
    manipulateDOM();  // Chama a função de manipulação do DOM externo
    
  }, []);

  const menuItems = [
    { title: 'GAME INFO', links: [{ label: 'Sobre a Riot', href: '/pt-br/quem-somos' }, { label: 'Diversidade e Inclusão', href: '/pt-br/diversity-and-inclusion' }, { label: 'Impacto social', href: '/pt-br/quem-somos/impacto-social' }] },
    { title: 'MEDIA', links: [{ label: 'Media Content 1', href: '/media' }, { label: 'Media Content 2', href: '/media-2' }] },
    { title: 'NEWS', links: [{ label: 'News Content 1', href: '/news' }, { label: 'News Content 2', href: '/news-2' }] },
    { title: 'LEADERSBORDS', links: [{ label: 'Leaderboard 1', href: '/leaderboards' }, { label: 'Leaderboard 2', href: '/leaderboards-2' }] },
    { title: 'SUPPORT', links: [{ label: 'Support 1', href: '/support' }, { label: 'Support 2', href: '/support-2' }] },
    { title: 'OUR SOCIALS', links: [{ label: 'Social 1', href: '/social' }, { label: 'Social 2', href: '/social-2' }] },
    { title: 'MORE', links: [{ label: 'More Content 1', href: '/more' }, { label: 'More Content 2', href: '/more-2' }] },
  ];

  return (
    <header id="header" className="header poppins-thin">
      <div id="left" className="">
        <img className="i2" src={IconScarlet} alt="Icon Scarlet" />
        <img className="i1" src={NomeScarletGames} alt="Nome Scarlet Games" />
        <nav className="header-center">
          <div className="content-pre-menu">
            <div id="menu" className="bars-menu">
              <i className="fa fa-bars fa-menu-size" aria-hidden="true"></i>
            </div>
            <div id="pre-menu" className="pre-menu">
              <ul className="list-menu">
                {menuItems.map((item, index) => (
                  <li key={index} className="d-flex align-center mg-0-5">
                    <Dropdown title={item.title} links={item.links} />
                  </li>
                ))}
              </ul>
              <div className="right">
                <form method="GET" action="/pt-br/buscar" className="search-form">
                  <label className="search-container">
                    <input type="text" name="q" size="12" placeholder="BUSCAR" className="search-input" autoComplete="off" value={inputValue} onChange={handleChange} />
                    <button type="submit" className="search-button" tabIndex="-1" title="Buscar">
                      <span className="icon" aria-hidden="true">
                        <svg viewBox="0 0 19 20" width="19" height="20">
                          <path fill="white" fillRule="evenodd" clipRule="evenodd"
                            d="M19 18.6l-5.2-5.2C15.2 12 16 10.1 16 8c0-4.4-3.6-8-8-8S0 3.6 0 8s3.6 8 8 8c1.6 0 3.1-.5 4.3-1.3l5.3 5.3 1.4-1.4zM2 8c0-3.3 2.7-6 6-6 1.6 0 3.1.6 4.2 1.8C13.4 4.9 14 6.4 14 8s-.6 3.1-1.8 4.2C11.1 13.4 9.6 14 8 14c-3.3 0-6-2.7-6-6z">
                          </path>
                        </svg>
                      </span>
                    </button>
                  </label>
                </form>
                <button className="button">Fazer login</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

const Dropdown = ({ title, links }) => (
  <div className="dropdown">
    <div className='drop-info'>
      <p>
        {title}
        <svg width="10" height="5" className="arrow" viewBox="0 0 8 5">
          <title>{title}</title>
          <path d="m.707 1.707 2.586 2.586a1 1 0 0 0 1.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707Z" fill="#7E7E7E"></path>
        </svg>
      </p>
    </div>
    <ul className="submenu-drop-info">
      {links.map((link, idx) => (
        <li key={idx} className="submenu-item">
          <a href={link.href} className="submenu-link">{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Header;
