import React, { useState, useEffect,Suspense  } from 'react';
import './sectionOne.css';
import Videoplayback from '../../../public/assets/video/Videoplayback.mp4';
import NomeScarletGames from '../../../public/assets/image/NomeScarletGames.png';

const SectionOne = () => {
  
    return (
       
        //<!--_______________SECTION 1 ONE__________________-->
        <div id="sect-video">
             {console.log('TESTEEEEEEEEEEEEEEEEE')}
            <div className="video-container">
                <video muted loop autoPlay /*controls*/> 
                    <source src={Videoplayback} type="video/mp4" />
                </video>
            </div>
            <div id="div-canto">
                <div id="new-canto">
                    <div className="content-logo">
                        <img className="" src={NomeScarletGames} alt="" />
                    </div>
                    <div className="h1-new">
                        <h1>
                            É hora de virar tudo de cabeça
                            <br/>
                            pra baixo.
                        </h1>
                    </div>
                    <p className="p-text">
                        A temporada final de Arcane chega à Netflix
    
                        em novembro.
                    </p>
                    <a href="https://www.youtube.com/watch?v=LUK9FRxCTtM" target="_blank" rel="noopener"
                        className="custom-button">
                        <span className="custom-button__content">
                            <div className="custom-button__icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M15.003 14H3.5v-4h11.502l-4.165-4.538 2.705-2.947 7.353 8.012c.747.813.747 2.133 0 2.947l-7.353 8.011-2.705-2.947L15.003 14z"
                                        fill="#F0F0F0"></path>
                                </svg>
                            </div>
                            <p className="p-button">Assista ao trailer agora</p>
                        </span>
                    </a>
    
                </div>
            </div>
        </div>
    );
  };
  
  export default SectionOne;
  