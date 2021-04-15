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
                            id="name"
                            type="text"
                            name="Nome" 
                            placeholder="Nome" 
                            ClassName="form-control"
                        />

                        <input 
                            id="phone"
                            type="text"
                            phone="Telefone" 
                            placeholder="Telefone" 
                            ClassName="form-control"
                        />
                        
                        <input 
                            id="email"
                            type="email"
                            email="email" 
                            placeholder="E-mail" 
                            ClassName="form-control"
                        />

                        <input 
                            id="subject"
                            type="text"
                            subject="enviar" 
                            placeholder="Enviar" 
                            ClassName="form-control"
                        />
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <textarea 
                            id="description"
                            type="text"
                            subject="enviar" 
                            placeholder="Enviar" 
                            ClassName="form-control"
                        ></textarea>
                        <button className="btn-main-offer contact-btn" type="submit">entre em contato</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
