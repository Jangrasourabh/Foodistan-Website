import React from "react";
import Header from "./components/common/header";
import SearchBar from "./components/common/searchBar.js";
import SpecialOffers from "./components/SpecialOffers";
import Deals from "./components/DealsOfTheDay";
import OrderByCuisines from "./components/OrderByCuisines";
import Footer from "./components/common/footer";
import Trolly from "./components/common/trolly";
import ListingCards from "./components/common/listingCards";
import Item from "./delivery-dashboard/food-item";
import Menu from "./delivery-dashboard/main-menu";
import About from './components/About';
import Blog from './components/Blog';
import Bop from "./components/Bop";
import Cart from './components/Cart';
import Cartaddress from './components/Cartaddress';

function Home() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <SpecialOffers />
      <Trolly />
      <Deals />
      <OrderByCuisines />
      <ListingCards />
      <About/>
      <Blog/>
      <Bop/>
      <Cart/>
      <Cartaddress/>
      <Footer />
    </div>
  );
}

export default Home;
