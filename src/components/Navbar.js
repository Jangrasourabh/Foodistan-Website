import React from 'react';
import logo from '../components/images/logo.png';
import cart from '../components/images/cart.png';


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="/"><img src={logo} alt="logo" /> </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav  ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/About">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Blog">Blog</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Bop">Become our partner</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="/">
      <button type="button" className="btn">Login/Sign Up</button>
      </a>
      </li>
      <li className="nav-item cart-icon">
      <a className="nav-link" href="/">
         <img src={cart} alt="cart"    />
         <p>3</p></a>
         </li>
    
    
      
    </ul>

  </div>
</nav>
        </>
    )
}

export default Navbar
