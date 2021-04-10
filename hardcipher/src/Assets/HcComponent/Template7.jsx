import React from "react";
import Img from "../Image/temp3.png"
import Im1 from "../Image/im1.png"
import Im2 from "../Image/im2.png"
import Im3 from "../Image/im3.png"
import Im4 from "../Image/im4.png"
import Card1 from "../Image/temp2.0.png";
import Card2 from "../Image/temp2.1.png";
import Card3 from "../Image/temp2.2.png";
import ServiceSection from "./ServiceSection";
import TestimonialSection from "./TestimonialSection";

const Template7 = () =>{
    return(
        <div id="template7">
            <section className="container-fluid header7" >
                <div className="row">
                <div class="col-lg-5 offset-1">
                        <img src={Img} class="img-fluid" alt="Business Looking" />
                    </div>
                </div>
                <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,64L16,58.7C32,53,64,43,96,64C128,85,160,139,192,181.3C224,224,256,256,288,240C320,224,352,160,384,133.3C416,107,448,117,480,106.7C512,96,544,64,576,58.7C608,53,640,75,672,69.3C704,64,736,32,768,53.3C800,75,832,149,864,181.3C896,213,928,203,960,170.7C992,139,1024,85,1056,64C1088,43,1120,53,1152,53.3C1184,53,1216,43,1248,64C1280,85,1312,139,1344,149.3C1376,160,1408,128,1424,112L1440,96L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path></svg>
                </div>
            </section>
            <section className="container-fluid" id="TimeLine">
            <div class="row" id="imcards">
                <div class="column">
                    <div class="card">
                    <img src={Im1} id="im"/>
                    <p>Since the 1500s</p>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                    <img src={Im2} id="im"/>
                    <p>Since the 1500s</p>
                    </div>
                </div>
                
                <div class="column">
                    <div class="card">
                    <img src={Im3} id="im"/>
                    <p>Since the 1500s</p>
                    </div>
                </div>
                
                <div class="column">
                    <div class="card">
                    <img src={Im4} id="im"/>
                    <p>Since the 1500s</p>
                    </div>
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
export default Template7;