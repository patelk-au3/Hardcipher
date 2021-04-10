import React from "react";
import Header from "../Image/temp1header.svg";
import Temp1 from "../Image/temp1.svg";
import Clients, {Cdata} from "./Clients";
import Carousel from "react-elastic-carousel";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ServiceSection from "./ServiceSection";
import TestimonialSection from "./TestimonialSection";

const Template1 = () =>{
    return(
        <div id="template1">
            {/* Header Section Start */}
            <section class="container-fluid header">
                <div class="row">
                    <div class="col-lg-4 mb-40">
                        <div class="">
                            <form name="register" action="#">
                                <div class="form-group">
                                    <label for="inputName">Name</label>
                                    <input type="text" class="form-control" id="inputName" placeholder="Enter your full name" />
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail">Email</label>
                                    <input type="email" class="form-control" id="inputEmail" placeholder="Enter your emali address" />
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail">Password</label>
                                    <input type="password" class="form-control" id="inputPassword" placeholder="Type Password" />
                                </div>
                                <div class="masthead__form-action">
                                    <button type="button" class="btn-get-started">Get started <ArrowRightAltIcon /><i class="fa fa-long-arrow-right"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-7 offset-1">
                        <img src={Header} class="img-fluid" alt="Business Looking" />
                    </div>
                </div>
            </section>
            {/* Header Section End */}

            {/* Client section start */}
            <div id="">
                <section className="container-fluid clients">
                    <div className="row">
                        <div className="col-md-12 my-5">
                            <div className="clients-list">
                            <Carousel itemsToShow={4} pagination={false}>
                                    {
                                        Cdata.map((val,index)=>{
                                            return(
                                                <Clients
                                                    key = {index}
                                                    imgsrc = {val.imgsrc}
                                                />
                                            );
                                        })
                                    }
                            </Carousel>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* Client section end */}

            {/* service section start */}
            <section className="container-fluid section-gap" id="services">
                <div className="row">
                    <div className="col-md-7 mx-auto text-center my-5">
                        <h2>Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quasi numquam esse earum adipisci dolor ipsum dolorem, culpa, eaque magnam quas tempora nam totam? Iusto quam sunt alias pariatur? Excepturi.</p>
                        <img src={Temp1} alt="template"/>
                    </div>
                </div>
                  
                <ServiceSection />
            </section>
            {/* service section end */}

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

export default Template1;