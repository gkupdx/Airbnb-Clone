//// TabletBarSticky.js - sticky version of the tablet view search bar

import logo from './airbnb_logo_noText2.png';
import { BiSearch } from 'react-icons/bi';
import { FiGlobe } from 'react-icons/fi';
import { MdMenu } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

const TabletBarSticky = () => {
  const hostLinkStyle = {
    color: "#333"
  }

  const airbnbLogoStyle = {
    color: "#e32750",
    width: "35px",
    height: "40px",
    marginLeft: "32px",
    marginTop: "10px"
  }

  const searchIconStyle = {
    color: "#FFF",
    fontSize: "16px"
  }
  const globeIconStyle = {
    color: "#333",
    fontSize: "16px"
  }

  const accountIconStyle = {
    color: "#000",
    opacity: "0.8",
    fontSize: "16px"
  }

  return (
    <div className="tabletFlexRow">
      <img style={airbnbLogoStyle} src={logo} alt="Airbnb logo"/>
      <button className="tabletFlexRow startSearchBtn">
        <p>Start your search</p>
        <button className="searchIconBtn"><BiSearch style={searchIconStyle}/></button>
      </button>
      <div className="accountBtns">
        <a style={hostLinkStyle} className="hostLink" href="#host">Become a Host</a>
        <button className="globeBtn"><FiGlobe style={globeIconStyle}/></button>
        <button className="tabletFlexRow accountBtn"><MdMenu style={accountIconStyle}/><FaUserCircle style={accountIconStyle}/></button>
      </div>
    </div>
  )
}

export default TabletBarSticky;
