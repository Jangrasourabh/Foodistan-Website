import React from 'react';
import '../components/style.css';
import home from '../components/Images/home.png';
import office from '../components/Images/office.png';
import add from '../components/Images/add.png';

const Cartaddress = () => {
    return (
        <>
        <div className="address main-heading-font">
            <h1>Select Address</h1>
            <p className="noraml-heading-font" >The order will be delivered on the given/selected address.<br/> 
You have saved the address in this location</p>
            <div className="row main-heading-font">
                
                    <div className="col-sm-4">
                    <div className="addcard">
                    <h3> <img src={home} alt="home" /> Home</h3>
                    <h5 className="noraml-heading-font">XY/12B, Blah blah Ngar,
                    Dwarka sector 18,
                    Near guruswara, New Delhi - 22</h5>
                    <h6 className="noraml-heading-font">Delivery Time: 30 mins</h6>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="addcard">
                    <h3> <img src={office} alt="home" />  Office</h3>
                    <h5 className="noraml-heading-font">XY/12B, Blah blah Ngar,
                    Dwarka sector 18,
                    Near guruswara, New Delhi - 22</h5>
                    <h6 className="noraml-heading-font">Delivery Time: 30 mins</h6>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="addadd">
                    <h3>Add new address</h3>
                    <h1><button><img src={add} alt="home" /></button></h1>
                    </div>
                </div>
               
                </div>
                <div className="main-heading-font mt-5">
                    <h2>Order Items</h2>
                    <div className="row">
                    <div className="order-items">
                  
                        <div className="box"></div>
                        <div className="sname">
                            <h4>Anna's hut</h4>
                            <p>Rohini</p>
                        </div>
                        </div>
                        <div className="row">
                        <div className="order-det">
                            <div className="col-sm-5">
                            <h3>Garlic mix munchao Noodles</h3>
                            <p>vegies, less spice, 3 mayo</p>
                            </div>
                            <div className="col-sm-2 ">
                                <div className="box-item">
                                <h6>1</h6>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <h6>₹120</h6>
                            </div>
                        </div>
                        <div className="order-det">
                            <div className="col-sm-5">
                            <h3>Garlic mix munchao Noodles</h3>
                            <p>vegies, less spice, 3 mayo</p>
                            </div>
                            <div className="col-sm-2 ">
                                <div className="box-item">
                                <h6>1</h6>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <h6>₹120</h6>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        
            
        </>
    )
}

export default Cartaddress
