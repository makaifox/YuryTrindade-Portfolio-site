import React from 'react';
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Desenvolvimento Web e criação de sites</h1>
                <Typed
                    className="typed-text"
                    strings={["Desenvolvimento De sites", "criação de sistemas web"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Entre em contato</a>
            </div>
        </div>
    )
}

export default Header
