import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Singleservice from "./pages/Singleservice";
import About_us from "./pages/About_us.js";
import Contact_us from "./pages/Contact_us";

import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReactGA from 'react-ga';

const trackingId = "UA-145269766-1";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);

//check dep
function App() {
  return (
    <>
      
        <Navbar />
        <div className="main-content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services/" component={Services} />
          <Route exact path="/services/:slug" component={Singleservice} />
          <Route exact path="/about_us" component={About_us} />
          <Route exact path="/contact_us" component={Contact_us} />
          <Route component={Error} />
        </Switch>
        </div>
    </>
  );
}

export default App;
