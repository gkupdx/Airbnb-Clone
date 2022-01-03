//// TabletBar.js - for the "fixed" version of the tablet view search bar

import { useState } from 'react';
import { FiGlobe } from 'react-icons/fi';
import { MdMenu } from 'react-icons/md';
import { FaUserCircle, FaSearch } from 'react-icons/fa';

import logo from './airbnb_logo_white2.png';

const TabletBar = () => {
  const [places, setPlaces] = useState(true);
  const [exp, setExp] = useState(false);

  const [divideX1, setDivideX1] = useState({
    opacity: "1",
    borderRight: "1px solid lightgrey",
    marginTop: "15px",
    marginBottom: "15px"
  });
  const [divideX2, setDivideX2] = useState({
    opacity: "1",
    borderRight: "1px solid lightgrey",
    marginTop: "15px",
    marginBottom: "15px"
  });
  const [divideX3, setDivideX3] = useState({
    opacity: "1",
    borderRight: "1px solid lightgrey",
    marginTop: "15px",
    marginBottom: "15px"
  });

  const hostLinkStyle = {
    color: "#FFF",
    fontWeight: "600",
    paddingTop: "10px"
  }

  const airbnbLogoStyle = {
    color: "#FFF",
    width: "100px",
    height: "55px",
    marginTop: "10px"
  }

  const searchIconStyle = {
    color: "#FFF",
    fontSize: "15px"
  }

  const globeIconStyle = {
    color: "#FFF",
    fontSize: "16px"
  }

  const accountIconStyle = {
    color: "#000",
    opacity: "0.8",
    fontSize: "20px"
  }

  const subtextStyle = {
    color: "#000",
    opacity: "0.6"
  }


  // Hide dividers on mouse enter
  const hideOnMouseEnter = (button) => {
    if (button === "location") {
      setDivideX1({
        opacity: "0",
        borderRight: "1px solid lightgrey",
        marginTop: "15px",
        marginBottom: "15px"
      });
    } else if (button === "checkIn") {
      setDivideX1({
        opacity: "0",
        borderRight: "1px solid lightgrey",
        marginTop: "15px",
        marginBottom: "15px"
      });
      setDivideX2({
        opacity: "0",
        borderRight: "1px solid lightgrey",
        marginTop: "15px",
        marginBottom: "15px"
      });
    } else if (button === "checkOut") {
      setDivideX2({
        opacity: "0",
        borderRight: "1px solid lightgrey",
        marginTop: "15px",
        marginBottom: "15px"
      });
      setDivideX3({
        opacity: "0",
        borderRight: "1px solid lightgrey",
        marginTop: "15px",
        marginBottom: "15px"
      });
    } else {
      setDivideX3({
        opacity: "0",
        borderRight: "1px solid lightgrey",
        marginTop: "15px",
        marginBottom: "15px"
      });
    }
  }

  // Show dividers on mouse leave
  const showOnMouseLeave = (button) => {
    if (button === "location") {
      setDivideX1({
        opacity: "1",
        borderRight: "1px solid lightgrey",
        marginTop: "15px",
        marginBottom: "15px"
      });
    } else if (button === "checkIn") {
      setDivideX1({
        opacity: "1",
        borderRight: "1px solid lightgrey",
        marginTop: "15px",
        marginBottom: "15px"
      });
      setDivideX2({
        opacity: "1",
        borderRight: "1px solid lightgrey",
        marginTop: "15px",
        marginBottom: "15px"
      });
    } else if (button === "checkOut") {
      setDivideX2({
        opacity: "1",
        borderRight: "1px solid lightgrey",
        marginTop: "15px",
        marginBottom: "15px"
      });
      setDivideX3({
        opacity: "1",
        borderRight: "1px solid lightgrey",
        marginTop: "15px",
        marginBottom: "15px"
      });
    } else {
      setDivideX3({
        opacity: "1",
        borderRight: "1px solid lightgrey",
        marginTop: "15px",
        marginBottom: "15px"
      });
    }
  }

  // Show correct bar on button click
  const showCorrectBar = (button) => {
    if (button === 'places') {
      setPlaces(true);
      setExp(false);
    } else if (button === 'exp') {
      setExp(true);
      setPlaces(false);
    }
  }


  return (
    <>
      <div className="tabletFlexRow">
        <img style={airbnbLogoStyle} src={logo} alt="Airbnb logo"/>
        <div className="optionsFlexRow">
          <button autoFocus onClick={() => showCorrectBar('places')}>Places to stay</button>
          <button onClick={() => showCorrectBar('exp')}>Experiences</button>
          <a href="#online-experiences">Online Experiences</a>
        </div>
        <div className="accountBtns">
          <a style={hostLinkStyle} className="hostLink" href="#host">Become a Host</a>
          <button className="globeBtn"><FiGlobe style={globeIconStyle}/></button>
          <button className="searchFlexRow accountBtn"><MdMenu style={accountIconStyle}/><FaUserCircle style={accountIconStyle}/></button>
        </div>
      </div>

      {places ?
      <div className="placesToStay">
        <button onMouseEnter={() => hideOnMouseEnter('location')} onMouseLeave={() => showOnMouseLeave('location')} className="location">Location<br></br><span style={subtextStyle}>Where are you going?</span></button>
        <div style={divideX1}></div>
        <button onMouseEnter={() => hideOnMouseEnter('checkIn')} onMouseLeave={() => showOnMouseLeave('checkIn')} className="checkIn">Check in<br></br><span style={subtextStyle}>Add dates</span></button>
        <div style={divideX2}></div>
        <button onMouseEnter={() => hideOnMouseEnter('checkOut')} onMouseLeave={() => showOnMouseLeave('checkOut')} className="checkOut">Check out<br></br><span style={subtextStyle}>Add dates</span></button>
        <div style={divideX3}></div>
        <button onMouseEnter={() => hideOnMouseEnter('guests')} onMouseLeave={() => showOnMouseLeave('guests')} className="guests">Guests<br></br><span style={subtextStyle}>Add guests</span></button>
        <button className="searchIconBtn2"><FaSearch style={searchIconStyle}/></button>
      </div> : ""}

      {exp ?
      <div className="exp">
        <button onMouseEnter={() => hideOnMouseEnter('locationAlt')} onMouseLeave={() => showOnMouseLeave('locationAlt')} className="locationAlt">Location<br></br><span style={subtextStyle}>Where are you going?</span></button>
        <div style={divideX3}></div>
        <button onMouseEnter={() => hideOnMouseEnter('date')} onMouseLeave={() => showOnMouseLeave('date')} className="date">Date<br></br><span style={subtextStyle}>Add when you want to go</span></button>
        <button className="searchIconBtn2"><FaSearch style={searchIconStyle}/></button>
      </div> : ""}
    </>
  )
}

export default TabletBar;
