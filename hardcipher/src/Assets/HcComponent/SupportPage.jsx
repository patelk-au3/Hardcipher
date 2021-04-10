import React from "react";
import backillustration from "../Image/backillustration.svg";
import Sectionwave from "./Svg";
import Img1 from "../Image/s1.png";
import Img2 from "../Image/s2.png";
import Img3 from "../Image/s3.png";

const SupportPage = () =>{
    return(
        <>
           <img src={backillustration} alt="backillustration" className="img-fluid backillustration" />
           <section className="container-fluid" id="support-page">
                <div className="row">
                    <div className="col-lg-9 my-5">
                        <div className="support">
                            <div className="row">
                                <div className="col-sm-4 text-center pb-5">
                                    <img src={Img1} alt="get support" className="img-fluid" />
                                </div>
                                <div className="offset-1 col-sm-7">
                                    <h2>Get Support</h2>
                                    <p>Let us know your doubts and we will provide our support in every manner. Call us or mail us your queries and we will reach out to you as soon as possible. We at HardCipher believe in providing full support to our customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 offset-md-3 my-5">
                        <div className="support">
                            <div className="row">
                                <div className="col-sm-7 pb-5">
                                    <h2>Our Community</h2>
                                    <p>We are a dedicated team of developers who puts in their heart and soul in providing 100% satisfaction to our clients. We believe in taking our clients onboard as we work through so they get what they want and are pleased to see the results.</p>
                                </div>
                                <div className="col-sm-4 offset-1 text-center">
                                    <img src={Img2} alt="get support" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 my-5">
                        <div className="support">
                            <div className="row">
                                <div className="col-sm-4 text-center pb-5">
                                    <img src={Img3} alt="get support" className="img-fluid" />
                                </div>
                                <div className="offset-1 col-sm-7">
                                    <h2>F.A.Q</h2>
                                    <p>The questions you have in your mind related to our company and the services we provide have all been answered here for your better understanding.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Sectionwave />
        </>
    );
}

export default SupportPage;