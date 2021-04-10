import React from "react";
import Header from "../Image/image2vector.svg";
import Clients, {Cdata} from "./Clients";
import Carousel from "react-elastic-carousel";
import Card1 from "../Image/temp2.0.png";
import Card2 from "../Image/temp2.1.png";
import Card3 from "../Image/temp2.2.png";
import TestimonialSection from "./TestimonialSection";

const Template2 = () =>{
    return(
        
        <div className="temp2" id="template2">
            <section class="container-fluid header2">
            <div class="input-group " id="topbutton">
                <div className="container" id="innerinput">
                <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Enter your text here" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">Get Started</span>
                </div>
                </div>
                </div>
            </div>
            </section>
            <section className="container-fluid section-gap" id="services">
                <div className="row">
                    <div className="col-md-7 mx-auto text-center my-5">
                        <h1>Heading</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quasi numquam esse earum adipisci dolor ipsum dolorem, culpa, eaque magnam quas tempora nam totam? Iusto quam sunt alias pariatur? Excepturi.</p>
                    </div>
                </div>
            </section>
            <section id="facilities">
                <div className="container">
                    <div className="row">
                        <Card
                        imgsrc={Card1}
                        heading="Buy Licence"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quasi numquam esse earum adipisci dolor ipsum dolorem, culpa,"
                        />
                        <Card
                        imgsrc={Card2}
                        heading="Install Software"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quasi numquam esse earum adipisci dolor ipsum dolorem, culpa,"
                        />
                        <Card
                        imgsrc={Card3}
                        heading="Download Free"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quasi numquam esse earum adipisci dolor ipsum dolorem, culpa,"
                        />
                    </div>
                </div>

            </section>
                {/* Testimonials section start */}
                            <section className="container-fluid" id="testimonialsection">
                <div className="row">
                    <div className="col-md-7 mx-auto text-center mb-5">
                        <h2>user testimonial</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mx-auto mb-5">
                        <TestimonialSection />
                    </div>
                </div>
            </section>
            {/* Testimonials section end */}
        </div>
    );
}

const Card = (props) =>{
    return(
        <>
        <div className="col-md-4" id="card2">
            <div className="card text-center">
            <img src={props.imgsrc} alt="card1" className="img2" />
            <div className="card-body">
            <h5 className="card-title">{props.heading}</h5>
            <p class="card-text">{props.text}</p>
            </div>
            </div>
            </div>
        </>
    );
}

export default Template2;