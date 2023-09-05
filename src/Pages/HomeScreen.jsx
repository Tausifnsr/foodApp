import React from "react";
import Nav from "../Components/Nav";
import "./HomeScreen.css";
import Banner from '../Components/Banner'
import AboutUs from "../Components/AboutUs";
import Articles from "../Components/Articles";
import Footer from "../Components/Footer";

function HomeScreen() {
  return (
    <>
      <Nav />
      <Banner />
      <AboutUs />
      <Articles />
      <Footer />
    </>
  );
}

export default HomeScreen;
