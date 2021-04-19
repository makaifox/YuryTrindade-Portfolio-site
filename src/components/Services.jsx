import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div id="services" className="services" >
            <h1 className="py-5"> Meus Serviços </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/>
                                </div>
                                <h3>Web Design</h3>
                                <p>Analisamos cada caso individualmente e sempre focando no resultado</p>

                            </div>
                        </div>
                        {/*-*/}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/>
                                </div>
                                <h3>Desenvolvimento Web</h3>
                                <p>Construimos seu site sempre com as melhores technologias</p>
                            </div>
                        </div>
                        {/*-*/}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/>
                                </div>
                                <h3>Desenvolvimento Frontend</h3>
                                <p>desenvolvemos ferramentas e estilos para aprimorar seus sistemas</p>
                            </div>
                        </div>
                        {/*-*/}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/>
                                </div>
                                <h3>Layouts e Protótipos</h3>
                                <p>Criamos vida para sua idéia ou projeto</p>
                            </div>
                        </div>
                        {/*-*/}
                    </div>
                </div>
            </div>
    )
}

export default Services
