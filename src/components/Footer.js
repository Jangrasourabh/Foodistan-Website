import React from 'react';
import footer from '../components/images/footer.png';
import logo from '../components/images/logo.png';

const Footer = () => {
    return (
        <>  
            <div className="footer">
                <div className="container-fluid">
            <div className="row">
            <div className="col-md-4">
            <img src={logo} className="footer-logo" alt="" />
                <img src={footer} className="footer-img" alt="" />
               
            </div>
             <div className="col-md-4 link">
                 
                 <div className="col-md-6 ">
                     
                      <h2>Company</h2>
                      <ul>
                          
                      <li><a href="/">About Us</a></li>
                      <li> <a href="/">Blog</a></li>
                      <li> <a href="/">Contact Us</a></li>
                      <li> <a href="/">Report</a></li>
                      <li><a href="/">Feedback</a></li>
                      </ul>
                </div>
                 <div className="col-md-6">
                       <h2>For You</h2>
                       <ul>
                          
                          <li><a href="/">Privacy</a></li>
                          <li> <a href="/">Terms</a></li>
                          <li> <a href="/">Security</a></li>
                          <li> <a href="/">Become a Partner</a></li>
                         
                          </ul>
                 
                 </div>
             </div>
            <div className="col-md-4">
                <div className="play-btn">
                <a href="false" target="_blank" rel="noopener noreferrer" ><img src="https://www.niftybuttons.com/googleplay/googleplay-button5.png" alt="btn"/></a>
                <a href="false" target="_blank" rel="noopener noreferrer" ><img src="https://www.niftybuttons.com/googleplay/googleplay-button5.png" alt="btn"/></a>
                </div>
                <div className="social">
                    <div className="col-md-12">
                    <a href="/"><img src="https://img.icons8.com/material-outlined/24/000000/twitter.png" alt="btn"/></a>
                    <a href="/"><img src="https://img.icons8.com/material-rounded/24/000000/facebook-new.png" alt="btn"/></a>
                      <a href="/"><img src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v2.png" alt="btn"/></a>
                    </div>
                
              
                </div>
            </div>
</div>
            </div>
            <hr/>
            <div className="f-para">
                <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. </p>
                <p>2008-2021 © Zomato™ Ltd. All rights reserved.</p>
            </div>
            </div>
        </>
    )
}

export default Footer
