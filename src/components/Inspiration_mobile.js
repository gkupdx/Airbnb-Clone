//// Inspiration_mobile.js

import { useState } from 'react';
import ArtLocation from './ArtLocation_mobile';

const Inspiration = () => {
  const [art, setArt] = useState(true);
  const [outdoor, setOutdoor] = useState(false);
  const [cabins, setCabins] = useState(false);
  const [beach, setBeach] = useState(false);
  const [popular, setPopular] = useState(false);
  const [unique, setUnique] = useState(false);

  const displayArt = () => {
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

  const displayOutdoor = () => {
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

  // Displays correct corresponding content when
  // 'Mountain Cabins' button is clicked
  const displayCabins = () => {
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

  // Displays correct corresponding content when
  // 'Beach destinations' button is clicked
  const displayBeach = () => {
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

  // Displays correct corresponding content when
  // 'Popular destinations' button is clicked
  const displayPopular = () => {
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

  // Displays correct corresponding content when
  // 'Unique Stays' button is clicked
  const displayUnique = () => {
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

  return (
    <div className="inspiration">
      <div className="inspirationWrapper">
        <h2>Inspiration for future getaways</h2>
        <div className="inspirationBtns">
          <div className="inspirationBtnWrapper">
            <button onClick={displayArt} className={art ? "activeBtn" : "inactiveBtn"}>Destinations for arts & culture</button>
            <div className={art ? "artBorderBottom" : ""}></div>
          </div>
          <div className="inspirationBtnWrapper">
            <button onClick={displayOutdoor} className={outdoor ? "activeBtn" : "inactiveBtn"}>Destinations for outdoor adventure</button>
            <div className={outdoor ? "outdoorBorderBottom" : ""}></div>
          </div>
          <div className="inspirationBtnWrapper">
            <button onClick={displayCabins} className={cabins ? "activeBtn" : "inactiveBtn"}>Mountain cabins</button>
            <div className={cabins ? "cabinsBorderBottom" : ""}></div>
          </div>
          <div className="inspirationBtnWrapper">
            <button onClick={displayBeach} className={beach ? "activeBtn" : "inactiveBtn"}>Beach destinations</button>
            <div className={beach ? "beachBorderBottom" : ""}></div>
          </div>
          <div className="inspirationBtnWrapper">
            <button onClick={displayPopular} className={popular ? "activeBtn" : "inactiveBtn"}>Popular destinations</button>
            <div className={popular ? "popularBorderBottom" : ""}></div>
          </div>
          <div className="inspirationBtnWrapper">
            <button onClick={displayUnique} className={unique ? "activeBtn" : "inactiveBtn"}>Unique Stays</button>
            <div className={unique ? "uniqueBorderBottom" : ""}></div>
          </div>
        </div>
        <div className="divideY2"></div>

        {art ? <ArtLocation /> : ""}
      </div>
    </div>
  )
}

export default Inspiration;
