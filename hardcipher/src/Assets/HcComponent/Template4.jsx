import React from "react";
import { NavHashLink } from 'react-router-hash-link';
import MiddleImg from "../Image/temp3.1.png"
import ServiceSection from "./ServiceSection";
import Card1 from "../Image/s1.png";
import Card2 from "../Image/s2.png";
import Card3 from "../Image/s3.png";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import TestimonialSection from "./TestimonialSection";

const Template4 = () =>{
    return(
        <div id="template4">
             <section class="container-fluid header4">
             <div className="row" id="temp4">
                <div className="col-lg-7">
                {/* <img src={MiddleImg} class="img-fluid" alt="Business Looking" /> */}
                </div>
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
            <section className="container-fluid text-center p-10">
                <div className="row">
                <div class="col-6 col-md-4"><p>Lorem ipsum </p></div>
                <div class="col-6 col-md-4"><p>Lorem ipsum </p></div>
                <div class="col-6 col-md-4"><p>Lorem ipsum </p></div>
                </div>
                <div className="row">
                <div class="col-6 col-md-6"><p>Lorem ipsum </p></div>
                <div class="col-6 col-md-6"><p>Lorem ipsum </p></div>
                </div>
                <div className="row">
                <div class="col-6 col-md-12"><p>Lorem ipsum </p></div>
                </div>
                <div className="button">
                <button type="button" class="btn btn-danger">Download</button> 
                </div>
            </section>
            <section className="container-fluid" id="card">
                <div className="row p-md-5 py-5 mt-5">
                    <Card 
                        imgsrc = {Card1}
                        heading = "Get Support"
                        text = "Let us know your doubts and we will provide our support in every manner. Call us or mail us your queries and we will reach out to you as soon as possible. We at HardCipher believe in providing full support to our customers."
                        linkname = "Go to support"
                    />
                    <Card 
                        imgsrc = {Card2}
                        heading = "Our community"
                        text = "We are a dedicated team of developers who puts in their heart and soul in providing 100% satisfaction to our clients. We believe in taking our clients onboard as we work through so they get what they want and are pleased to see the results."
                        linkname = "Go to community"
                    />
                    <Card 
                        imgsrc = {Card3}
                        heading = "F.A.Q"
                        text = "The questions you have in your mind related to our company and the services we provide have all been answered here for your better understanding."
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
            <div className="col-lg-4">
                <div className="card my-lg-0 my-3">
                    <div className="row no-gutters">
                        <div className="col-sm-2 text-center">
                            <img src={props.imgsrc} alt="card1" className="img-fluid" />
                            </div>
                            <div className="col-sm-9">
                            <div className="card-body">
                                <h5 className="card-title">{props.heading}</h5>
                                <p className="card-text my-2">{props.text}</p>
                                <NavHashLink to="/support#" className="mt-auto">{props.linkname} <ArrowRightAltIcon /></NavHashLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Template4;