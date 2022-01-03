//// NextTrip_mobile.js

import { useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';

const NextTrip = () => {
  const [leftButton, setLeftButton] = useState(false); // toggle left chevron CSS
  const [rightButton, setRightButton] = useState(true); // toggle right chevron CSS
  const [position, setPosition] = useState(0);
  const [updateStyle, setUpdateStyle] = useState({
    transform: `translateX(${position}px)`,
    transition: `0.4s ease`
  });

  const chevronIconStyle = {
    fontSize: "18px"
  }

  // NextTrip carousel
  const shiftCarousel = (direction) => {
    // for keeping track of the current carousel position
    let updatePos = position;

    // DIRECTION - LEFT
    if (direction === 'left') {
      if (position === 0 || position === -240) { // check to see if in default position or near default position
        updatePos = 0;
        setLeftButton(false);
      } else if (position <= -500) { // we are near the end of carousel, shift only by 100
        updatePos += 100;
        setRightButton(true);
      } else {
        updatePos += 240;
        setLeftButton(true);
        setRightButton(true);
      }
    } else { // DIRECTION - RIGHT
      if (position < -480) { // we are AT THE END so DO NOT SHIFT RIGHT
        updatePos -= 0;
      } else if (position <= -480) { // check to see if we are shifting from near the end of carousel
        updatePos -= 100;
        setRightButton(false);
      } else {
        updatePos -= 240;
        setLeftButton(true);
        setRightButton(true);
      }
    }

    // shift to the updated position
    setPosition(updatePos);

    // apply the new style
    setUpdateStyle({
      transform: `translateX(${updatePos}px)`,
      transition: `0.4s ease`
    });
  }

  return (
    <div className="nextTrip">
      <div className="flexRow">
        <div><h2>Inspiration for your next trip</h2></div>
        <div className="chevronBtns">
          <button onClick={() => shiftCarousel('left')} className={leftButton ? "clickableBtn" : "notClickableBtn"}><BiChevronLeft style={chevronIconStyle}/></button>
          <button onClick={() => shiftCarousel('right')} className={rightButton ? "clickableBtn" : "notClickableBtn"}><BiChevronRight style={chevronIconStyle}/></button>
        </div>
      </div>

      <div style={updateStyle} className="flexRowCards">
        <div className="mtHoodCard"></div>
        <div className="sunriverCard"></div>
        <div className="leavenworthCard"></div>
        <div className="lincolnCityCard"></div>
      </div>
    </div>
  )
}

export default NextTrip;
