import React, {useState} from 'react';
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";

const Contacts = () => {
    const [sucessMessage, setSucessMessage] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_0GtoIUM84YBWSAvu7Bb0W";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID, 
            templateID,
            {
              name:data.name,
              Telefone:data.Telefone,  
              email: data.email,
              titulo: data.titulo,
              mensagem: data.mensagem
            },
            userID
            )
            r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) =>  {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSucessMessage("Sua mensagem foi enviada com sucesso !!");
          }).catch(err => console.error(`algo deu errado ${err}`));
        }

    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
            <h1>Entre em Contato</h1> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, non.</p>
            <span className="sucess-message">{sucessMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">

                        <div className="text-center">

                        <input
                  type="text"
                  className="form-control"
                  placeholder="Nome"
                  name="name"
                  aria-invalid={errors.name ? "true" : "false"}
                  {...register("name", {
                    required: "Por favor, digite seu nome",
                    maxLength: {
                      value: 20,
                      message:
                        "Seu nome não pode conter mais que 20 caracteres",
                    },
                  })}
                />

                        <div className="line"></div>

                         </div>
                         <span className="error-message">
                             {errors.name && errors.name.message}
                         </span>
                        <div className="text-center">

                        <input 
                          type="text"
                            name="Telefone" 
                            placeholder="Telefone" 
                            className="form-control"
                            aria-invalid={errors.name ? "true" : "false"}
                            {...register("Telefone", {
                                required: "Por favor, digite seu telefone",
                                
                  })}
                        />
                        
                        <div className="line"></div>

                        </div>
                        <span className="error-message">
                             {errors.Telefone && errors.Telefone.message}
                         </span>
                        <div className="text-center">

                        <input 
                          type="email"
                            name="email" 
                            placeholder="E-mail" 
                            className="form-control"
                            aria-invalid={errors.name ? "true" : "false"}
                            {...register("email", {
                                required: "Por favor, digite seu email",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Por favor, insira um email válido"
                                }
                                
                  })}
                        />

                        <div className="line"></div>
                        </div>

                        <span className="error-message">
                             {errors.email && errors.email.message}
                         </span>
                        <div className="text-center">

                        <input 
                            type="text"
                            name="titulo" 
                            placeholder="titulo" 
                            className="form-control"
                            aria-invalid={errors.name ? "true" : "false"}
                            {...register("titulo", {
                                required: "Por favor, digite um tiluto para sua mensagem",
                                
                  })}
                            />

                        <div className="line"></div>

                    </div>
                    <span className="error-message">
                             {errors.titulo && errors.titulo.message}
                         </span>
                             

                    </div>


                    <div className="col-md-6 col-xs-12">
                    <div className="text-center">
                        <textarea 
                                type="text"
                            name="mensagem" 
                            placeholder="Insira sua mensagem" 
                            className="form-control"
                            aria-invalid={errors.name ? "true" : "false"}
                            {...register("mensagem", {
                                required: "Por favor, digite uma mensagem",
                                
                  })}
                        ></textarea>

                    <div className="line"></div>

                    </div>
                    <span className="error-message">
                             {errors.mensagem && errors.mensagem.message}
                         </span>

                        <button className="btn-main-offer contact-btn" type="submit">entre em contato</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
