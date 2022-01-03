//// App.js

import { useState, useEffect } from 'react';
/*import Header from './components/Header';
import NextTrip from './components/NextTrip';
import GiftCards from './components/GiftCards';
import Hosting from './components/Hosting';
import Discover from './components/Discover';
import Inspiration from './components/Inspiration';
import Footer from './components/Footer';*/
import SearchBar from './components/SearchBar_mobile';
import Header from './components/Header_mobile';
import NextTrip from './components/NextTrip_mobile';
import Discover from './components/Discover_mobile';
import Hosting from './components/Hosting_mobile';
import Inspiration from './components/Inspiration_mobile';
import Footer from './components/Footer_mobile';
import FooterBar from './components/FooterBar_mobile';

function App() {

  // footer bar CSS transition into visible
  const scrollUpStyle = {
    bottom: "0",
    transition: "0.1s ease-in"
  };
  // footer bar CSS transition into hidden
  const scrollDownStyle = {
    bottom: "-65px",
    transition: "0.1s ease-out"
  };

  // Function to show or hide footer bar based on scroll position
  const [currentPos, setCurrentPos] = useState(document.scrollingElement.scrollHeight); // grab the current scroll height
  const [visible, setVisible] = useState(false);

  const visibleFooterBar = () => {
    if (currentPos < window.pageYOffset) { // we're scrolling DOWN - HIDE
      setVisible(false);
    } else if (currentPos > window.pageYOffset) { // we're scrolling UP - SHOW
      setVisible(true);
    }

    // update current Y position to new scroll position
    setCurrentPos(window.pageYOffset);
  }

  useEffect(() => {
    visibleFooterBar()
    window.addEventListener("scroll", visibleFooterBar)
  });

  // Function to refresh page to top at tablet width breakpoint
  const forceRefresh = () => {
    if (window.innerWidth === 900) {
      window.scrollTo(0, 0);
    }
  }

  useEffect(() => {
    forceRefresh()
    window.addEventListener("resize", forceRefresh)
  });

  return (
    <div className="container">
      {/*<Header />
      <NextTrip />
      <GiftCards />
      <Discover />
      <Hosting />
      <Inspiration />
      <Footer />*/}
      <SearchBar />
      <Header />
      <NextTrip />
      <Discover />
      <Hosting />
      <Inspiration />
      <Footer />
      {/* check to see if pageYOffset (px) is near bottom of page */}
      {/* if YES, hide footer bar */}
      {/* if NO, determine if we're scrolling up or down */}
      {window.pageYOffset <= 4000 ? visible ? <FooterBar style={scrollUpStyle}/> : <FooterBar style={scrollDownStyle}/> : ""}
    </div>
  );
}

export default App;
