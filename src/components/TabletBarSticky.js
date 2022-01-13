//// TabletBarSticky.js - sticky version of the tablet view search bar

import { useState, useEffect } from 'react';
import { FiGlobe } from 'react-icons/fi';
import { MdMenu } from 'react-icons/md';
import { FaUserCircle, FaSearch } from 'react-icons/fa';

import redLogo from './airbnb_logo_red.png';
import redTextLogo from './airbnb_logo_redText.PNG';

const TabletBarSticky = () => {
  const [logo, setLogo] = useState(redLogo);
  const [viewport, setViewport] = useState(true);

  const hostLinkStyle = {
    color: "#333",
    fontWeight: "600",
    paddingTop: "10px"
  }

  const searchIconStyle = {
    color: "#FFF",
    fontSize: "12px"
  }

  const globeIconStyle = {
    color: "#333",
    fontSize: "16px"
  }

  const accountIconStyle = {
    color: "#000",
    opacity: "0.8",
    fontSize: "18px"
  }

  const logoStyle = {
    marginLeft: "25px"
  }

  const logoTextStyle = {
    marginLeft: "15px"
  }

  // Render different Airbnb logos depending on browser width
  const handleResize = () => {
    if (window.innerWidth < 1100) {
      setLogo(redLogo);
      setViewport(false);
    } else {
      setLogo(redTextLogo);
      setViewport(true);
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="tabletFlexRow">
      {!viewport ? <img style={logoStyle} src={logo} alt="Airbnb logo"/> : <img style={logoTextStyle} src={logo} alt="Airbnb logo"/>}

      <button className="searchFlexRow startYourSearch">
        <p>Start your search</p>
        <button className="searchIconBtn1"><FaSearch style={searchIconStyle}/></button>
      </button>
      <div className="accountBtns">
        <a style={hostLinkStyle} className="hostLink" href="#host">Become a Host</a>
        <button className="globeBtn"><FiGlobe style={globeIconStyle}/></button>
        <button className="searchFlexRow accountBtn"><MdMenu style={accountIconStyle}/><FaUserCircle style={accountIconStyle}/></button>
      </div>
    </div>
  )
}

export default TabletBarSticky;
