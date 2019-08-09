import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

import {Link} from "react-router-dom";
import ServicesHome from "../components/ServicesHome"
import FeaturedRooms from "../components/FeaturedRooms"

export default function Home() {
  return (
  <>
        <div className="main-content">

  <Hero hero="defaultHero" >
    <Banner title="Book an appointment" subtitle="description of the service">
      <Link to="/services" className=" btn-primary">
        Our services
        </Link>
      </Banner>
  </Hero>
  <ServicesHome></ServicesHome>
  <FeaturedRooms></FeaturedRooms>
</div>
  </>);
}
