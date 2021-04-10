import React from "react";
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Sectionwave from "./Svg";

const ContactPage = () =>{
    return(
        <>
            <section className="container-fluid" id="contact-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 order-lg-4">
                            <h2>Contact us</h2>
                            <p className="py-5">Give us a call email us at the given mail id or just fill in the form provided and our staff will connect with you to provide a great work experience.</p>
                            <form className="row mb-5">
                                <div className="col-md-6 form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                </div>

                                <div className="col-md-6 form-group">
                                    <label htmlFor="emal">Email address</label>
                                    <input type="email" className="form-control" id="emal" aria-describedby="emal" placeholder="Enter your email address" />
                                </div>

                                <div className="col-md-12 form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" className="form-control" id="subject" placeholder="Enter your subject" />
                                </div>

                                <div className="col-md-12 form-group">
                                    <label htmlFor="comment">Comment</label>
                                    <textarea className="form-control" id="comment" aria-describedby="comment" rows="8" placeholder="Enter your comment" />
                                </div>

                                <div className="col-md-12 form-action">
                                    <button type="submit" className="btn-submit">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <aside>
                                <div className="row">
                                    <div className="col-8">
                                        <h5> Office address</h5>
                                        <p>B3/17 First floor model town first Delhi, India (110009).</p>
                                    </div>
                                    <div className="col-4"><RoomIcon /></div>
                                    <div className="col-8 my-4">
                                        <h5> Phone number</h5>
                                        <p>(+91) 9711855888</p>
                                    </div>
                                    <div className="col-4 my-4"><PhoneIcon /></div>
                                    <div className="col-8">
                                        <h5>Email address</h5>
                                        <p>info@hardcipher.io</p>
                                    </div>
                                    <div className="col-4"><MailOutlineIcon /></div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
            <Sectionwave />
        </>
    );
}

export default ContactPage;