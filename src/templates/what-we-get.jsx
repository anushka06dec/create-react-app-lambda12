import React, { Component } from 'react';
import Pagination from '../components/pagination-business';
import CTA from '../components/cta';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
class Whatweget extends Component {
    render() {
    const heroImage = {
        backgroundImage:`url(${process.env.PUBLIC_URL+ "/include/images/what-we-do-banner.jpg"})`
    };
    return (
        <>
        <div class="hero-container d-flex align-items-center">
            <div class="hero-bg" style={heroImage}></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-7 offset-md-1">
                        <div class="hero-text">
                            <h1>What You Get</h1>
                            <h5>Lorem ipsum dolor sit amet consectetur</h5>
                            <p>Integer odio diam, iaculis a leo sed, accumsan ornare justo. Nulla tincidunt convallis egestas. Donec vitae semper erat. Phasellus cursus nibh non metus sollicitudin, sit amet vulputate magna pulvinar.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-scroll d-none d-md-block">
                <div class="scroll-wheel"></div>
            </div>
        </div>
       <div class="content-container card-container pb-0">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <ul class="card-list card-slider d-md-flex flex-md-wrap">
                            <li class="card-item">
                                <div class="card-box text-center d-flex flex-column">
                                    <h4>Tailored Solutions</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio diam, iaculis a leo sed, accumsan ornare justo. Nulla tincidunt convallis egestas.</p>
                                    <div class="card-btn mt-auto"><Link to="/tailored-solutions" class="btn btn-primary">FIND OUT MORE</Link></div>
                                </div>
                            </li>
                            <li class="card-item">
                                <div class="card-box text-center d-flex flex-column">
                                    <h4>Risk Management</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio diam, iaculis a leo sed, accumsan ornare justo.</p>
                                    <div class="card-btn mt-auto"><Link to="/effective-risk" class="btn btn-primary">FIND OUT MORE</Link></div>
                                </div>
                            </li>
                            <li class="card-item">
                                <div class="card-box text-center d-flex flex-column">
                                    <h4>Claims Management</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio diam, iaculis a leo sed, accumsan ornare justo. Nulla tincidunt convallis egestas.</p>
                                    <div class="card-btn mt-auto"><Link to="/claims-management" class="btn btn-primary">FIND OUT MORE</Link></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <CTA />
        <Pagination />
        </>
    );
  }
}
export default Whatweget;