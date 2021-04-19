import React from 'react'
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
    return (
        <div id="clientes" className="testimonials">
            <h1>Meus clientes</h1>
            <div className="container">
                <div className="testimonials-content">
                <TestimonialsCarousel/>
                </div>
            </div>
        </div>

    )
}

export default Testimonials
