import React, { Component } from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
class CTA extends Component {
    render() {
    return (
        <>
        <div class="content-container grey-bg block-container">
		    <div class="container">
		        <div class="row">
		            <div class="col-lg-10 offset-lg-1">
		                <ul class="block-list mobile-slider d-md-flex flex-md-wrap flex-md-row-reverse">
		                    <li class="block-item">
		                        <div class="block-box d-flex flex-column">
		                            <h3>What We Do</h3>
		                            <p>At BACKsure, our transport-specific industry experience enables us to successfully handle your insurance requirements and provide proactive and tailored advice delivered with integrity.</p>
		                            <div class="block-btn"><Link to="/what-we-do" class="btn btn-primary">FIND OUT MORE</Link></div>
		                        </div>
		                    </li>
		                    <li class="block-item">
		                        <div class="block-box d-flex flex-column">
		                            <h3>Your Business</h3>
		                            <p>
		                                You’re passionate about your business and so are we. At BACKsure we want to partner with you to understand your business, its processes and requirements so we can provide a truly bespoke, sector-specific
		                                solution.
		                            </p>
		                            <div class="block-btn"><Link to="/your-business" class="btn btn-primary">FIND OUT MORE</Link></div>
		                        </div>
		                    </li>
		                </ul>
		            </div>
		        </div>
		    </div>
		</div>
        </>
    );
  }
}
export default CTA;