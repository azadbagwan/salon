import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom"
import RoomsContainer from "../components/RoomsContainer"
export default function Services() {
  return (
    <div className="div-centered">
      <Hero hero="servicesHero">
      <Banner title="Services" subtitle="We give you the best you deserve!">
      <Link to="/services" className=" btn-primary">
        Our services
        </Link>
      </Banner>
      </Hero>
      <RoomsContainer/>
      
    </div>
  );
}
