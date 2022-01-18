//// NextTrip_mobile.js

import { useState, useRef } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';

const NextTrip = () => {
  const cardWidth = useRef(); // ref to grab width of dynamic card elements

  const [leftButton, setLeftButton] = useState(false); // toggle left chevron CSS
  const [rightButton, setRightButton] = useState(true); // toggle right chevron CSS
  const [position, setPosition] = useState(0); // keep track of X-coordinate of <div>
  const [updateStyle, setUpdateStyle] = useState({ // apply new style
    transform: `translateX(${position}px)`,
    transition: `0.4s ease`
  });

  const chevronIconStyle = {
    fontSize: "18px"
  }

  // NextTrip carousel nav buttons
  const shiftCarousel = (direction) => {
    let updatePos = position; // keeping track of the current carousel position

    // DIRECTION - LEFT
    if (direction === 'left') {
      if (position === 0 || position + cardWidth.current.offsetWidth + 20 >= 0) { // check if IN default position or 1 away from default
        updatePos = 0;
        setLeftButton(false);

      } else if (position <= -(cardWidth.current.offsetWidth * 2.4)) { // shifting LEFT from near end of carousel, shift only 2.5x
        updatePos += cardWidth.current.offsetWidth / 2.5;
        setRightButton(true);

      } else {
        updatePos += (cardWidth.current.offsetWidth + 20); // add 20 to take into account margin-right value
        setLeftButton(true);
        setRightButton(true);
      }

    } else if (direction === 'right'){ // DIRECTION - RIGHT
      if (position <= -(cardWidth.current.offsetWidth * 2.5)) { // we are AT THE END so DO NOT SHIFT RIGHT
        updatePos -= 0;

      } else if (position - cardWidth.current.offsetWidth <= -(cardWidth.current.offsetWidth * 3)) { // shifting RIGHT at near end of carousel, shift only 2.5x
        updatePos -= cardWidth.current.offsetWidth / 2.5;
        setRightButton(false);

      } else {
        updatePos -= (cardWidth.current.offsetWidth + 20); // add 20 to take into account margin-right value
        setLeftButton(true);
        setRightButton(true);
      }

    } else if (direction === 'leftTab') { // DIRECTION - LEFT [tablet]
      if (position === 0 || position + cardWidth.current.offsetWidth + 20 >= 0) {
        updatePos = 0;
        setLeftButton(false);
      } else if (position <= -(cardWidth.current.offsetWidth * 1.5)) {
        updatePos += cardWidth.current.offsetWidth / 1.5;
        setRightButton(true);
      } else {
        updatePos += (cardWidth.current.offsetWidth + 20);
        setLeftButton(true);
        setRightButton(true);
      }

    } else if (direction === 'rightTab') { // DIRECTION - RIGHT [tablet]
      if (position <= -(cardWidth.current.offsetWidth * 1.5)) {
        updatePos -= 0;
      } else if (position - cardWidth.current.offsetWidth <= -(cardWidth.current.offsetWidth * 2)) {
        updatePos -= cardWidth.current.offsetWidth / 1.5;
        setRightButton(false);
      } else {
        updatePos -= (cardWidth.current.offsetWidth + 20);
        setLeftButton(true);
        setRightButton(true);
      }
    }


    // shift to updated position
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
          {window.innerWidth < 850 ?
          <>
            <button onClick={() => shiftCarousel('left')} className={leftButton ? "clickableBtn" : "notClickableBtn"}><BiChevronLeft style={chevronIconStyle}/></button>
            <button onClick={() => shiftCarousel('right')} className={rightButton ? "clickableBtn" : "notClickableBtn"}><BiChevronRight style={chevronIconStyle}/></button>
          </>
          :
          <>
            <button onClick={() => shiftCarousel('leftTab')} className={leftButton ? "clickableBtn" : "notClickableBtn"}><BiChevronLeft style={chevronIconStyle}/></button>
            <button onClick={() => shiftCarousel('rightTab')} className={rightButton ? "clickableBtn" : "notClickableBtn"}><BiChevronRight style={chevronIconStyle}/></button>
          </>}
        </div>
      </div>

      <div style={updateStyle} className="flexRowCards">
        <div ref={cardWidth} className="mtHoodCard"></div>
        <div className="sunriverCard"></div>
        <div className="leavenworthCard"></div>
        <div className="lincolnCityCard"></div>
      </div>
    </div>
  )
}

export default NextTrip;
