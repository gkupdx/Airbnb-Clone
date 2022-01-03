//// Inspiration_mobile.js

import { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import ArtLocation from './ArtLocation_mobile';
import OutdoorLocation from './OutdoorLocation_mobile';
import CabinsLocation from './CabinsLocation_mobile';
import BeachLocation from './BeachLocation_mobile';
import PopularLocation from './PopularLocation_mobile';
import UniqueLocation from './UniqueLocation_mobile';

const Inspiration = () => {
  const [showSeeMore, setShowSeeMore] = useState(true); // toggle state for showing/hiding 'See more' button
  const [hiddenStyle, setHiddenStyle] = useState({ // CSS toggle for showing/hiding additional locations
    display: "none"
  });

  const [art, setArt] = useState(true);
  const [outdoor, setOutdoor] = useState(false);
  const [cabins, setCabins] = useState(false);
  const [beach, setBeach] = useState(false);
  const [popular, setPopular] = useState(false);
  const [unique, setUnique] = useState(false);

  const [leftButton, setLeftButton] = useState(false);
  const [rightButton, setRightButton] = useState(true);
  const [position, setPosition] = useState(0);
  const [updateStyle, setUpdateStyle] = useState({
    transform: `translateX(${position}px)`
  });

  // Passed-in prop to _Location.js components
  // to stylize the country name to a lower opacity
  const lightText = {
    color: "rgba(0, 0, 0, 0.6)"
  }

  // Passed-in prop to _Location.js components
  // to stylize the 'Show more' button
  const showMoreStyle = {
    fontWeight: 600,
    textDecoration: "underline"
  }

  // Passed-in prop to _Location.js components
  // for 'Show more' button onClick functionality
  const showMoreLocations = () => {
    setHiddenStyle({
      display: "block"
    });
    setShowSeeMore(false);
  }

  // Inspiration navigation chevron icon
  const chevronIconStyle = {
    fontSize: "25px"
  }

  // Displays correct locations panel on
  // corresponding button click
  const displayPanel = (button) => {
    if (button === 'art') {
      if (!art) {
        setArt(!art);
        if (outdoor || cabins || beach || popular || unique) {
          setOutdoor(false);
          setCabins(false);
          setBeach(false);
          setPopular(false);
          setUnique(false);
        }
      }
    }

    if (button === 'outdoor') {
      if (!outdoor) {
        setOutdoor(!outdoor);
        if (art || cabins || beach || popular || unique) {
          setArt(false);
          setCabins(false);
          setBeach(false);
          setPopular(false);
          setUnique(false);
        }
      }
    }

    if (button === 'cabins') {
      if (!cabins) {
        setCabins(!cabins);
        if (art || outdoor || beach || popular || unique) {
          setArt(false);
          setOutdoor(false);
          setBeach(false);
          setPopular(false);
          setUnique(false);
        }
      }
    }

    if (button === 'beach') {
      if (!beach) {
        setBeach(!beach);
        if (art || outdoor || cabins || popular || unique) {
          setArt(false);
          setOutdoor(false);
          setCabins(false);
          setPopular(false);
          setUnique(false);
        }
      }
    }

    if (button === 'popular') {
      if (!popular) {
        setPopular(!popular);
        if (art || outdoor || cabins || beach || unique) {
          setArt(false);
          setOutdoor(false);
          setCabins(false);
          setBeach(false);
          setUnique(false);
        }
      }
    }

    if (button === 'unique') {
      if (!unique) {
        setUnique(!unique);
        if (art || outdoor || cabins || beach || popular) {
          setArt(false);
          setOutdoor(false);
          setCabins(false);
          setBeach(false);
          setPopular(false);
        }
      }
    }
  }

  // Inspiration nav button functionality (MOBILE VIEW)
  const shiftButtons = (direction) => {
    let updatePos = position;

    // DIRECTION - LEFT
    if (direction === 'left') {
      updatePos += 50;
      setLeftButton(true);
      setRightButton(true);
    } else { // DIRECTION - RIGHT
      updatePos -= 50;
      setLeftButton(true);
      setRightButton(true);
    }

    // shift <div> to updated position
    setPosition(updatePos);

    // AFTER SHIFT, check to see if we're near the beginning
    // if yes, hide left button
    if (updatePos + 50 === 0) {
      setLeftButton(false);
    }
    // AFTER SHIFT, check to see if we're near the end
    // if yes, hide right button
    if (updatePos - 50 === -650) {
      setRightButton(false);
    }

    // apply the new style (<div>)
    setUpdateStyle({
      transform: `translateX(${updatePos}px)`
    });
  }

  return (
    <div className="inspiration">
      {/* Inspiration left & right nav buttons */ }
      <div className="navWrapper">
        <button onClick={() => shiftButtons('left')} className={leftButton ? "showLeftNavBtn" : "hiddenNavBtn"}><BiChevronLeft style={chevronIconStyle}/></button>
        <button onClick={() => shiftButtons('right')} className={rightButton ? "showRightNavBtn" : "hiddenNavBtn"}><BiChevronRight style={chevronIconStyle}/></button>
      </div>

      <div className="inspirationWrapper">
        <h2>Inspiration for future getaways</h2>

        {/* Inspiration destination buttons */ }
        <div style={updateStyle} className="inspirationBtnRow">
          <div className="inspirationBtnWrapper">
            <button onClick={() => displayPanel('art')} className={art ? "activeBtn" : "inactiveBtn"}>Destinations for arts & culture</button>
            <div className={art ? "artBorderBottom" : ""}></div>
          </div>
          <div className="inspirationBtnWrapper">
            <button onClick={() => displayPanel('outdoor')} className={outdoor ? "activeBtn" : "inactiveBtn"}>Destinations for outdoor adventure</button>
            <div className={outdoor ? "outdoorBorderBottom" : ""}></div>
          </div>
          <div className="inspirationBtnWrapper">
            <button onClick={() => displayPanel('cabins')} className={cabins ? "activeBtn" : "inactiveBtn"}>Mountain cabins</button>
            <div className={cabins ? "cabinsBorderBottom" : ""}></div>
          </div>
          <div className="inspirationBtnWrapper">
            <button onClick={() => displayPanel('beach')} className={beach ? "activeBtn" : "inactiveBtn"}>Beach destinations</button>
            <div className={beach ? "beachBorderBottom" : ""}></div>
          </div>
          <div className="inspirationBtnWrapper">
            <button onClick={() => displayPanel('popular')} className={popular ? "activeBtn" : "inactiveBtn"}>Popular destinations</button>
            <div className={popular ? "popularBorderBottom" : ""}></div>
          </div>
          <div className="inspirationBtnWrapper">
            <button onClick={() => displayPanel('unique')} className={unique ? "activeBtn" : "inactiveBtn"}>Unique Stays</button>
            <div className={unique ? "uniqueBorderBottom" : ""}></div>
          </div>
        </div>
        <div className="divideY2"></div>

        {art ? <ArtLocation lightText={lightText} showMoreStyle={showMoreStyle} showSeeMore={showSeeMore} hiddenStyle={hiddenStyle} showMoreLocations={showMoreLocations}/> : ""}
        {outdoor ? <OutdoorLocation lightText={lightText} showMoreStyle={showMoreStyle} showSeeMore={showSeeMore} hiddenStyle={hiddenStyle} showMoreLocations={showMoreLocations}/> : ""}
        {cabins ? <CabinsLocation lightText={lightText} showMoreStyle={showMoreStyle} showSeeMore={showSeeMore} hiddenStyle={hiddenStyle} showMoreLocations={showMoreLocations}/> : ""}
        {beach ? <BeachLocation lightText={lightText} showMoreStyle={showMoreStyle} showSeeMore={showSeeMore} hiddenStyle={hiddenStyle} showMoreLocations={showMoreLocations}/> : ""}
        {popular ? <PopularLocation lightText={lightText} showMoreStyle={showMoreStyle} showSeeMore={showSeeMore} hiddenStyle={hiddenStyle} showMoreLocations={showMoreLocations}/> : ""}
        {unique ? <UniqueLocation lightText={lightText}/> : ""}

      </div>
    </div>
  )
}

export default Inspiration;
