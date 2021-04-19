import React from 'react';
import Typed from "react-typed";
import {Link} from "react-scroll";

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Desenvolvimento Web e criação de sites</h1>
                <Typed
                    className="typed-text"
                    strings={["Desenvolvimento De sites", "criação de sistemas web"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} to="contacts" href="#" className="btn-main-offer">Entre em contato</Link>
            </div>
        </div>
    )
}

export default Header
