import React from "react";
import Header from "../Image/temp6.png"
import Card1 from "../Image/temp2.0.png";
import Card2 from "../Image/temp2.1.png";
import Card3 from "../Image/temp2.2.png";
import card1 from "../Image/s1.png";
import card2 from "../Image/s2.png";
import card3 from "../Image/s3.png";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import TestimonialSection from "./TestimonialSection";
import ServiceSection from "./ServiceSection";
import { NavHashLink } from 'react-router-hash-link';

const Template6 = () =>{
    return(
        <div id="template6">
            <section className="container-fluid header6">
            <div className="col-md-7 mx-auto text-center " id="containerText">
                        <h2>Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quasi numquam esse earum adipisci dolor ipsum dolorem, culpa, eaque magnam quas tempora nam totam? Iusto quam sunt alias pariatur? Excepturi.</p>
                    </div>
            </section>
            <section className="container-fluid section-gap" id="services">
                <div className="row">
                    <div className="col-md-7 mx-auto text-center my-5">
                        <h2>Heading</h2>
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
            <section className="container-fluid" >
                <div className="row p-md-6 py-5">
                    <CardBottom 
                        imgsrc = {card1}
                        heading = "Get Support"
                        text = "Let us know your doubts and we will provide our support in every manner. Call us or mail us your queries ."
                        linkname = "Go to support"
                    />
                    <CardBottom
                        imgsrc = {card2}
                        heading = "Our community"
                        text = "We are a dedicated team of developers who puts in their heart and soul in providing 100% satisfaction to our clients."
                        linkname = "Go to community"
                    />
                    <CardBottom 
                        imgsrc = {card3}
                        heading = "F.A.Q"
                        text = "The questions you have in your mind related to our company and the services we provide."
                        linkname = "Go to F.A.Q"
                    />
                </div>
            </section>
            <section className="container-fluid section-gap" id="services">
                <div className="mx-auto my-5">
                    <div className="col-md-6 mx-auto text-center my-5">
                    <h2>Our Services</h2>
                    </div>
                    <div className="col-md-6 mx-auto text-center my-5">
                        <article>
                            <p>We are a bunch of creative and imaginative people who work according to your requirement and aims at delivering the best we can. We provide authentic work that focuses on converting your customers into clients. We are a team of experienced workers who are known to give 100% results.</p>
                        </article>
                    </div>
                </div>
                  
                <ServiceSection />
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
const CardBottom = (props) =>{
    return(
        <>
            <div className="col-lg-4" id="temp6BottomCard">
                <div className="card my-lg-0 my-4">
                    <div className="row no-gutters">
                        <div className="col-sm-3 text-center">
                            <img src={props.imgsrc} alt="card1" className="img-fluid" />
                            </div>
                            <div className="col-sm-9">
                            <div className="card-body" id="innercard">
                                <h5 className="card-title">{props.heading}</h5>
                                <p className="card-text my-4">{props.text}</p>
                                <NavHashLink to="/support#" className="mt-auto">{props.linkname} <ArrowRightAltIcon /></NavHashLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Template6;