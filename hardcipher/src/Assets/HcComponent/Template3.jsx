import React from "react";
import Header from "../Image/temp3.png";
import MiddleImg from "../Image/temp3.1.png"
import Temp1 from "../Image/temp1.svg";
import Clients, {Cdata} from "./Clients";
import Carousel from "react-elastic-carousel";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ServiceSection from "./ServiceSection";
import TestimonialSection from "./TestimonialSection";

const Template3 = () =>{
    return(
        <div id="template3">
            {/* Header Section Start */}
            <div className="sidebar"></div>
            <div class="row no-gutters header3">
            <div class="col-12 col-sm-6 col-md-2" id="sidebarMenu">
            <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">profile</a></li>
                </ul>
            </div>
            <div class="col-6 col-md-10" id="imgbox">
            <img src={Header} class="img-fluid" alt="Business Looking" id="topimg"/>
            </div>
            </div>
            {/* <div className="sidebar"></div> */}
            {/* <section class="container-fluid header3">
                <div className="row no-gutters">
                <div className="col-sm-2" id="sidebarMenu">
                <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">profile</a></li>
                </ul>
            </div>
                <div className="col-sm-8">
                <img src={Header} class="img-fluid" alt="Business Looking"/>
                </div>
            </div>   
            </section> */}
            {/* Header Section End */}

            {/* service section start */}
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
            {/* service section end */}

            {/* Heading section start */}
            <section className="container-fluid" id="midheading">
                <div className="row" id="inner">
                    <div className="col-md-6" id="text">
                        <h2>Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quasi numquam esse earum adipisci dolor ipsum dolorem, culpa,</p>
                    </div>
                    <div className="col-md-6" id="img5">
                    <img src={MiddleImg} class="img-fluid" alt="Business Looking" />
                    </div>
                </div>
            </section>
            {/* Heading section end */}
 
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

export default Template3;