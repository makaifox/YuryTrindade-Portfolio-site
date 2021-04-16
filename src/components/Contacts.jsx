import React from 'react'

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="text-center">
            <h1>Entre em Contato</h1> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, non.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <input 
                         type="text"
                            name="Nome" 
                            placeholder="Nome" 
                            className="form-control"
                        />

                        <input 
                          type="text"
                            phone="Telefone" 
                            placeholder="Telefone" 
                            className="form-control"
                        />
                        
                        <input 
                          type="email"
                            email="email" 
                            placeholder="E-mail" 
                            className="form-control"
                        />

                        <input 
                            type="text"
                            subject="titulo" 
                            placeholder="titulo" 
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <textarea 
                                type="text"
                            subject="mensagem" 
                            placeholder="Insira sua mensagem" 
                            className="form-control"
                        ></textarea>
                        <button className="btn-main-offer contact-btn" type="submit">entre em contato</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
