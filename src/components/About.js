import React from 'react';
import '../components/style.css';
import food from '../components/Images/food.jpeg';
import male from '../components/Images/male.png';

const About = () => {
    return (
        <>
           <div className="hero-image">
             <img src={food} alt="main-img" />   
            </div> 
          
            <div className="about">
                <div className="row">
                <div className="col-sm-6 main-heading-font">
                    <h1>About Us</h1>
                    <p className="normal-font">Food aggregators feed into almost a third of your revenues which makes it difficult to earn profits. Take this time to build your own infrastructure and be less dependent on aggregator apps</p>
                </div>
                <div className="col-sm-6">
                <img src={food} alt="main-img" /> 
                </div>
                </div>
            </div>
            <div className="aim">
                <div className="row">
                <div className="col-sm-6">
                    <img src={food} alt="main-img" /> 
                </div>
                <div className="col-sm-6 main-heading-font">
                    <h1>Our Aim</h1>
                    <p className="normal-font">Food aggregators feed into almost a third of your revenues which makes it difficult to earn profits. Take this time to build your own infrastructure and be less dependent on aggregator apps</p>
                </div>
                
            </div>
            </div>
            <div className="team ">
                <div className="team-info main-heading-font">
                <h1>Our Team</h1>
                <p className="normal-font">Food aggregators feed into almost a third of your revenues which makes it difficult to earn profits. Take this time to build your own infrastructure and be less dependent on aggregator apps</p>
            </div>
            <div className="container">
            <div className="member">
            
                <div className="row noraml-heading-font">
                <div className="col-md-4 ">
                    <img src={male} alt="icon" />
                    <h2>Mayank</h2>
                    <h3>CEO</h3>
                </div>
                <div className="col-md-4"><img src={male} alt="icon" /> <h2>Mayank</h2>
                    <h3>CEO</h3></div>
                <div className="col-md-4"><img src={male} alt="icon" /> <h2>Mayank</h2>
                    <h3>CEO</h3></div>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default About
