import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import NavbarSection from "./Assets/HcComponent/NavbarSection";
import HomePage from "./Assets/HcComponent/HomePage";
import AboutPage from "./Assets/HcComponent/AboutPage";
import ServicePage from "./Assets/HcComponent/ServicePage";
import PortfolioPage from "./Assets/HcComponent/PortfolioPage";
import ContactPage from "./Assets/HcComponent/ContactPage";
import SupportPage from "./Assets/HcComponent/SupportPage";
import Template1 from "./Assets/HcComponent/Template1";
import Template2 from "./Assets/HcComponent/Template2";
import Template3 from "./Assets/HcComponent/Template3";
import Template4 from "./Assets/HcComponent/Template4";
import Template5 from "./Assets/HcComponent/Template5";
import Template6 from "./Assets/HcComponent/Template6";
import Template7 from "./Assets/HcComponent/Template7";
import Template8 from "./Assets/HcComponent/Template8";
import Template9 from "./Assets/HcComponent/Template9";
import FooterSection from "./Assets/HcComponent/FooterSection";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavbarSection />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about-us" component={AboutPage} />
        <Route exact path="/services" component={ServicePage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/contact-us" component={ContactPage} />
        <Route exact path="/support" component={SupportPage} />
        <Route exact path="/template1" component={Template1} />
        <Route exact path="/template2" component={Template2} />
        <Route exact path="/template3" component={Template3} />
        <Route exact path="/template4" component={Template4} />
        <Route exact path="/template5" component={Template5} />
        <Route exact path="/template6" component={Template6} />
        <Route exact path="/template7" component={Template7} />
        <Route exact path="/template8" component={Template8} />
        <Route exact path="/template9" component={Template9} />
        <Redirect to="/" />
      </Switch>
      <FooterSection />
    </>
  );
}

export default App;
