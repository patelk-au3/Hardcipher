import React from "react";
import { NavHashLink } from 'react-router-hash-link';
import backillustration from "../Image/backillustration.svg";
import Aboutfg from "../Image/about fg.svg";
import Sectionwave from "./Svg";

const AboutPage = () =>{
    return(
        <>
            <img src={backillustration} alt="backillustration" className="img-fluid backillustration" />
            <section className="container-fluid" id="about-page">
                <div className="row">
                    <div className="col-md-9 mx-auto my-5">
                    <img src={Aboutfg} alt="illustration" className="img-fluid my-5" />
                        <article>
                        <p>We at hardCipher, are known to be one of the topmost, inventive and above all customer cordial advanced specialist organizations in the market. we work for the fulfillment of our customers need and providing high grade quality. We invest heavily in our work portfolio of profoundly satisfied customers, hence consistently thriving advancement in the industry.</p>
                        <br />

                        <p>we channelize each possible attempt in giving our clients a serious edge over their challengers in the market. Assuming you are hoping to bring in customers from everywhere around the world, we can assist you with that also. We will endeavor to guarantee that your site is completely SEO agreeable.</p><br />
                        
                        <p>Our tweaked sites are made after strategy making, wireframing, your assessment on plan, clients prerequisite, improvement and afterward it is published. Our developers and designers focus on eye catchy designs, ease of use of the webiste, innovative usefulness, connecting with structure lastly the best quality programmic that guarantees that site doesn't lose its essence. Our modified work incorporates custom landing page plan, custom inward pages to feature your items, services, portfolio, websites, photograph collections and considerably more.</p>
                        </article>
                        <div className="d-flex justify-content-center my-5">
                            <NavHashLink to="/contact-us#" className="get-in-touch-btn">Get in touch with us</NavHashLink>
                        </div>
                    </div>
                </div>
            </section>
            <Sectionwave />
        </>
    );
}

export default AboutPage;