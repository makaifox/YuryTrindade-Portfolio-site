import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    FacebookMessengerShareButton,	
    FacebookMessengerIcon,
    PinterestShareButton,
    PinterestIcon,
    RedditShareButton,
    RedditIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    WhatsappShareButton,
    WhatsappIcon
    
} from "react-share";
import {Link} from "react-scroll";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>2021 - todos os direitos reservados</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:21993424566">(21) 99342- 4566</a>
                        </div>
                        <div className="d-flex">
                           <p>yu.trindade@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home" offset={-110} className="nav-link" href="#">Home</Link>
                                <br/>
                                <Link smooth={true} to="sobre" offset={-110} className="nav-link" href="#">Sobre mim</Link>
                                <br/>
                                <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">Meus Serviços</Link>
                                <br/>
                                <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">Meus Serviços</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">Minha Trajetoria</Link>
                                <br/>
                                <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">Portfólio</Link>
                                <br/>
                                <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="#">Contato</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-6 align-items-center">
                        <div className="d-flex justify-content-center">
    
                            <TelegramShareButton
                                url={"https://makaifox.github.io/YuryTrindadePortfolio/"}
                                quote={"Fullstack Developer"}
                                hastag="#react"
                                >
                                <TelegramIcon className="mx-3" size={36}/>
                            </TelegramShareButton>

                            <LinkedinShareButton
                                url={"https://makaifox.github.io/YuryTrindadePortfolio/"}
                                quote={"Fullstack Developer"}
                                hastag="#react"
                                >
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                            <WhatsappShareButton
                                 url={"https://makaifox.github.io/YuryTrindadePortfolio/"}
                                quote={"Fullstack Developer"}
                                hastag="#react"
                                >
                            <WhatsappIcon className="mx-3" size={36}/>
                            </WhatsappShareButton>
                        </div>
                        
                    </div>
                </div>
                <div className="row  justify-content-md-center">
                <p className="pt-3 text-center">
                            Copyright&copy;{new Date().getFullYear()}&nbsp;| Yury Trindade - Desenvolvedor fullstack - Todos os direitos reservados
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
