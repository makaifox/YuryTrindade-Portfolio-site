import React from 'react';
import netflix from '../images/netflix.png';
import cityGuide from '../images/city-guide-app.png';
import portfolio from '../images/portfolio.png';
import taskManager from '../images/task-manager.png';
// fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
//React Poupopbox
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";




const Portfolio = () => {

    //Netflix
    const openPopupboxNetflix = () =>{
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={netflix} alt="Netflix"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repudiandae soluta architecto minus mollitia asperiores? 
                Odio quae itaque saepe cupiditate consequatur.</p>
                <b>Github:</b><a onClick={() => window.open("http://github.com/makaifox","_blank")} className="hyper-link">http://github.com/makaifox</a>
            </>

            )
       
        PopupboxManager.open({content})
    }

    const popupboxConfigNetflix ={
        titleBar: {
            enable: true,
            text: "Projeto 1"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
        //CityGuide
        const openPopupboxCityGuide = () =>{
            const content = (
                <>
                <img className="portfolio-image-popupbox" src={cityGuide} alt="Netflix"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Repudiandae soluta architecto minus mollitia asperiores? 
                    Odio quae itaque saepe cupiditate consequatur.</p>
                    <b>Github:</b><a onClick={() => window.open("http://github.com/makaifox","_blank")} className="hyper-link">http://github.com/makaifox</a>
                </>
    
                )
           
            PopupboxManager.open({content})
        }
    
        const popupboxConfigCityGuide ={
            titleBar: {
                enable: true,
                text: "Projeto 2"
            },
            fadeIn: true,
            fadeInSpeed: 500
        }
            //Portfolio
    const openPopupboxPortfolio = () =>{
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={portfolio} alt="Netflix"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repudiandae soluta architecto minus mollitia asperiores? 
                Odio quae itaque saepe cupiditate consequatur.</p>
                <b>Github:</b><a onClick={() => window.open("http://github.com/makaifox","_blank")} className="hyper-link">http://github.com/makaifox</a>
            </>

            )
       
        PopupboxManager.open({content})
    }

    const popupboxConfigPortfolio={
        titleBar: {
            enable: true,
            text: "Projeto 3"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //TaskManager
    const openPopupboxPTaskManager = () =>{
        const content = (
            <>
            <img className="portfolio-image-popupbox" src={taskManager} alt="Netflix"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repudiandae soluta architecto minus mollitia asperiores? 
                Odio quae itaque saepe cupiditate consequatur.</p>
                <b>Github:</b><a onClick={() => window.open("http://github.com/makaifox","_blank")} className="hyper-link">http://github.com/makaifox</a>
            </>

            )
       
        PopupboxManager.open({content})
    }

    const popupboxConfigTaskManager={
        titleBar: {
            enable: true,
            text: "Projeto 4"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    
    
    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfólio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
                        <img src={netflix} alt="Netflix" className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        
                    </div>
                {/*-*/}
                    <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
                        <img src={cityGuide} alt="cityGuide" className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        
                    </div>
                {/*-*/}
                    <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
                        <img src={portfolio} alt="Portfolio" className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        
                    </div>
                {/*-*/}
                    <div className="portfolio-image-box" onClick={openPopupboxPTaskManager}>
                        <img src={taskManager} alt="taskmanager" className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        
                    </div>
                </div>
                {/*-*/}
            </div>
            <PopupboxContainer {...popupboxConfigNetflix}/>
            <PopupboxContainer {...popupboxConfigCityGuide}/>
            <PopupboxContainer {...popupboxConfigPortfolio}/>
            <PopupboxContainer {...popupboxConfigTaskManager}/>
        </div>
    )
}

export default Portfolio
