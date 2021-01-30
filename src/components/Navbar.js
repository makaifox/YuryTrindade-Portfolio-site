import React from 'react';
//react fontawesome import//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">LOGO</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre mim</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Meus Serviços</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Minha Trajetoria</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Portfólio</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Contato</a>
                        </li>
                        
                        </ul>
                        
                        </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
