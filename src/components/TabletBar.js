//// TabletBar.js - for the "fixed" version of the tablet view search bar

import logo from './airbnb_logo_white2.png';
import { FiGlobe } from 'react-icons/fi';
import { MdMenu } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

const TabletBar = () => {
  const hostLinkStyle = {
    color: "#FFF"
  }

  const airbnbLogoStyle = {
    color: "#FFF",
    width: "100px",
    height: "55px"
  }

  const globeIconStyle = {
    color: "#FFF",
    fontSize: "16px"
  }

  const accountIconStyle = {
    color: "#000",
    opacity: "0.8",
    fontSize: "16px"
  }

  const subtextStyle = {
    color: "#000",
    opacity: "0.6"
  }

  return (
    <>
      <div className="tabletFlexRow">
        <img style={airbnbLogoStyle} src={logo} alt="Airbnb logo"/>
        <div className="optionBtns">
          <button>Places to stay</button>
          <button>Experiences</button>
          <a href="#online-experiences">Online Experiences</a>
        </div>
        <div className="accountBtns">
          <a style={hostLinkStyle} className="hostLink" href="#host">Become a Host</a>
          <button className="globeBtn"><FiGlobe style={globeIconStyle}/></button>
          <button className="tabletFlexRow accountBtn"><MdMenu style={accountIconStyle}/><FaUserCircle style={accountIconStyle}/></button>
        </div>
      </div>
      <div className="placesToStay">
        <button className="location">Location<br></br><span style={subtextStyle}>Where are you going?</span></button>
        <div className="divideX"></div>
        <button className="checkIn">Check in<br></br><span style={subtextStyle}>Add dates</span></button>
        <div className="divideX"></div>
        <button className="checkOut">Check out<br></br><span style={subtextStyle}>Add dates</span></button>
        <div className="divideX"></div>
        <button className="guests">Guests<br></br><span style={subtextStyle}>Add guests</span></button>
      </div>
    </>
  )
}

export default TabletBar;
