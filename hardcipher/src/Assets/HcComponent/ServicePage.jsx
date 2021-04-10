import React from "react";
import {ServicesPageComponent, ServicesPageComponentData} from "./ServiceData";
import backillustration from "../Image/backillustration.svg";
import { NavHashLink } from 'react-router-hash-link';
import Sectionwave from "./Svg";

const ServicePage = () =>{
    return(
        <>
            <img src={backillustration} alt="backillustration" className="img-fluid backillustration" />
            <section className="container-fluid" id="services-page">
                <div className="row mx-auto my-5">
                    <div className="col-lg-4 text-center mb-5">
                        <h2>Our Services</h2>
                    </div>
                    <div className="col-lg-7">
                        <article>
                            <p>We are a bunch of creative and imaginative people who work according to your requirement and aims at delivering the best we can. We provide authentic work that focuses on converting your customers into clients. We are a team of experienced workers who are known to give 100% results.</p>
                        </article>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10">
                    {
                        ServicesPageComponentData.map((val,index)=>{
                            return(
                                <ServicesPageComponent
                                    key = {index}
                                    id = {val.id}
                                    imgsrc = {val.imgsrc}
                                    heading = {val.heading}
                                    text = {val.text}
                                    link = {val.link}
                                />
                            );
                        })
                    }
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <div className="d-flex justify-content-center my-5">
                            <NavHashLink to="/portfolio#">
                                <button className="portfolio-btn">View our portfolio</button>
                            </NavHashLink>
                        </div>
                    </div>
                </div>
            </section>
            <Sectionwave />
        </>
    );
}

export default ServicePage;