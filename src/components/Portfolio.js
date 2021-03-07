import React from 'react';
import netflix from '../images/netflix.png';
import cityGuide from '../images/city-guide-app.png';
import portfolio from '../images/portfolio.png';
import taskManager from '../images/task-manager.png';
// fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';




const Portfolio = () => {
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfólio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box">
                        <img src={netflix} alt="Netflix" className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        
                    </div>
                {/*-*/}
                    <div className="portfolio-image-box">
                        <img src={cityGuide} alt="cityGuide" className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        
                    </div>
                {/*-*/}
                    <div className="portfolio-image-box">
                        <img src={portfolio} alt="Portfolio" className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        
                    </div>
                {/*-*/}
                    <div className="portfolio-image-box">
                        <img src={taskManager} alt="taskmanager" className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                        
                    </div>
                </div>
                {/*-*/}
            </div>
        </div>
    )
}

export default Portfolio
