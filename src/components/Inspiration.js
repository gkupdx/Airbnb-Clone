//// Inspiration.js - for 'Inspiration for future getaways' section

import { useState } from 'react';

import ArtLocation from './ArtLocation';
import OutdoorLocation from './OutdoorLocation';
import CabinsLocation from './CabinsLocation';
import BeachLocation from './BeachLocation';
import PopularLocation from './PopularLocation';
import UniqueLocation from './UniqueLocation';

const Inspiration = () => {
  const [art, setArt] = useState(true);
  const [outdoor, setOutdoor] = useState(false);
  const [cabins, setCabins] = useState(false);
  const [beach, setBeach] = useState(false);
  const [popular, setPopular] = useState(false);
  const [unique, setUnique] = useState(false);

  // Displays correct corresponding content when
  // 'Destination for arts & culture' button is clicked
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

  // Displays correct corresponding content when
  // 'Destination for outdoor adventure' button is clicked
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
      <h2>Inspiration for future getaways</h2>
      <div className="inspirationWrapper">
        <div className="artsBtnWrapper">
          <button onClick={displayArt} className={art ? "artsBtn1" : "artsBtn2"}>Destination for arts & culture</button>
          <div className={art ? "artsBorderBottom" : ''}></div>
        </div>
        <div className="outdoorBtnWrapper">
          <button onClick={displayOutdoor} className={outdoor ? "outdoorBtn1" : "outdoorBtn2"}>Destinations for outdoor adventure</button>
          <div className={outdoor ? "outdoorBorderBottom" : ''}></div>
        </div>
        <div className="cabinsBtnWrapper">
          <button onClick={displayCabins} className={cabins ? "cabinsBtn1" : "cabinsBtn2"}>Mountain cabins</button>
          <div className={cabins ? "cabinsBorderBottom" : ''}></div>
        </div>
        <div className="beachBtnWrapper">
          <button onClick={displayBeach} className={beach ? "beachBtn1" : "beachBtn2"}>Beach destinations</button>
          <div className={beach ? "beachBorderBottom" : ''}></div>
        </div>
        <div className="popularBtnWrapper">
          <button onClick={displayPopular} className={popular ? "popularBtn1" : "popularBtn2"}>Popular destinations</button>
          <div className={popular ? "popularBorderBottom" : ''}></div>
        </div>
        <div className="uniqueBtnWrapper">
          <button onClick={displayUnique} className={unique ? "uniqueBtn1" : "uniqueBtn2"}>Unique Stays</button>
          <div className={unique ? "uniqueBorderBottom" : ''}></div>
        </div>
      </div>

      <div className="divider"></div>

      { /* Contents displayed should change upon button click */ }
      {art ? <ArtLocation /> : ''}
      {outdoor ? <OutdoorLocation /> : ''}
      {cabins ? <CabinsLocation /> : ''}
      {beach ? <BeachLocation /> : ''}
      {popular ? <PopularLocation /> : ''}
      {unique ? <UniqueLocation /> : ''}
    </div>
  )
}

export default Inspiration;
