import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

//AVATAR IMPORTS
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";
import avatar5 from "../images/avatars/avatar-5.png";

const TestimonialsCarousel = () => {
    return (
        <Carousel 
            showArrows={true} 
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            <>
                <img src={avatar1} alt="avatar1"/>
                <div className="myCarousel">
                    <h3>John Doe</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Aperiam, labore modi minus minima incidunt dolor neque natus necessitatibus 
                    a blanditiis voluptates commodi accusamus quo deleniti? 
                    Aut dicta voluptatem esse quisquam.</p>
                </div>
            </>

            <>
                <img src={avatar2} alt="avatar2"/>
                <div className="myCarousel">
                    <h3>John Doe</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Aperiam, labore modi minus minima incidunt dolor neque natus necessitatibus 
                    a blanditiis voluptates commodi accusamus quo deleniti? 
                    Aut dicta voluptatem esse quisquam.</p>
                </div>
            </>

            <>
                <img src={avatar3} alt="avatar3"/>
                <div className="myCarousel">
                    <h3>Jane Doe</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Aperiam, labore modi minus minima incidunt dolor neque natus necessitatibus 
                    a blanditiis voluptates commodi accusamus quo deleniti? 
                    Aut dicta voluptatem esse quisquam.</p>
                </div>
            </>

            <>
                <img src={avatar4} alt="avatar4"/>
                <div className="myCarousel">
                    <h3>John Doe</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Aperiam, labore modi minus minima incidunt dolor neque natus necessitatibus 
                    a blanditiis voluptates commodi accusamus quo deleniti? 
                    Aut dicta voluptatem esse quisquam.</p>
                </div>
            </>

            <>
                <img src={avatar5} alt="avatar5"/>
                <div className="myCarousel">
                    <h3>John Doe</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Aperiam, labore modi minus minima incidunt dolor neque natus necessitatibus 
                    a blanditiis voluptates commodi accusamus quo deleniti? 
                    Aut dicta voluptatem esse quisquam.</p>
                </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel
