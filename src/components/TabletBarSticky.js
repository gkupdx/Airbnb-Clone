//// TabletBarSticky.js - sticky version of the tablet view search bar

import logo from './airbnb_logo_noText2.png';
import { FiGlobe } from 'react-icons/fi';
import { MdMenu } from 'react-icons/md';
import { FaUserCircle, FaSearch } from 'react-icons/fa';

const TabletBarSticky = () => {
  const hostLinkStyle = {
    color: "#333",
    fontWeight: "600",
    paddingTop: "10px"
  }

  const airbnbLogoStyle = {
    color: "#e32750",
    width: "35px",
    height: "40px",
    marginLeft: "32px"
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

  return (
    <div className="tabletFlexRow">
      <img style={airbnbLogoStyle} src={logo} alt="Airbnb logo"/>
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
