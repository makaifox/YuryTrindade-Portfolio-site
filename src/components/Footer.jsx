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
                                <a href="" className="footer-nav">HOME</a>
                                <br/>
                                <a href="" className="footer-nav">SOBRE MIM</a>
                                <br/>
                                <a href="" className="footer-nav">MEUS SERVIÇOS</a>
                            </div>
                            <div className="col">
                                <a href="" className="footer-nav">MINHA TRAJETÓRIA</a>
                                <br/>
                                <a href="" className="footer-nav">PORTFÓLIO</a>
                                <br/>
                                <a href="" className="footer-nav">CONTATO</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-6 align-items-center">
                        <div className="d-flex justify-content-center">
    
                            <TelegramShareButton
                                url={"https://#"}
                                quote={"Fullstack Developer"}
                                hastag="#react"
                                >
                                <TelegramIcon className="mx-3" size={36}/>
                            </TelegramShareButton>

                            <LinkedinShareButton
                                url={"https://#"}
                                quote={"Fullstack Developer"}
                                hastag="#react"
                                >
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                            <WhatsappShareButton
                                url={"https://#"}
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
                            Copyright&copy;{new Date().getFullYear()}&nbsp;|Todos os direitos reservados
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
