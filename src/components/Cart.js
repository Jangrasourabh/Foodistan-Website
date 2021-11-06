import React from 'react';
import Frame from '../components/Images/Frame.png';

const Cart = () => {
    return (
        <>
            <div className="cart main-heading-font">
                <h1>Your Cart Is Empty</h1>
                <h5 className="normal-font">Hmm.. Seems like you haven’t tried the deliciousness of the food yet. 
                  NO PROBLEM! Let’s add some orders for you :)</h5>
               <button className="heading-font" >Order Now</button>
              < img src={Frame} alt="cart" className="center" />

            </div>
        </>
    )
}

export default Cart
