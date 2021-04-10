import React from "react";
import { NavHashLink } from 'react-router-hash-link';
import Logo from "../Image/logo.png";
import MenuIcon from '@material-ui/icons/Menu';

const NavbarSection = () =>{
    return(
        <>
            <section className="container-fluid">
               <div className="row">
                   <div className="col">
                       <div className="navbar navbar-expand-lg">
                            <NavHashLink className="navbar-brand" to="/">
                                <img src={Logo} alt="HardCipher Logo" className="brand-logo" />
                            </NavHashLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <MenuIcon />
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <List link="/" linkname="Home"/>
                                    <List link="/#services" linkname="Services"/>
                                    <List link="/#aboutus" linkname="About HC"/>
                                    <List link="/#work" linkname="How we work"/>
                                    <List link="/portfolio" linkname="Portfolio"/>
                                    <List link="/contact-us" linkname="Contact"/>
                                </ul>
                            </div>
                        </div>
                   </div>
               </div>
            </section>
        </>
    );
}

const List = (props) => {
    return(
        <>
            <li className="nav-item">
                <NavHashLink smooth exact activeClassName="active-nav" className="nav-link mx-2" to={props.link} data-toggle="collapse" data-target=".navbar-collapse.show">{props.linkname }</NavHashLink>
            </li>
        </>
    );
}

export default NavbarSection;