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
  })

  const chevronIconStyle = {
    fontSize: "18px"
  }

  // NextTrip carousel
  const shiftCarousel = (direction) => {
    // for keeping track of the current carousel position
    let updatePos = position;

    // DIRECTION - LEFT
    if (direction === 'left') {
      if (position === 0 || position === -250) { // check to see if in default position or near default position
        updatePos = 0;
        setLeftButton(false);
      } else if (position <= -600) { // we are near the end of carousel, shift only by 100
        updatePos += 100;
        setRightButton(true);
      } else {
        updatePos += 250;
        setLeftButton(true);
        setRightButton(true);
      }
    } else { // DIRECTION - RIGHT
      if (position < -500) { // we are AT THE END so DO NOT SHIFT RIGHT
        updatePos -= 0;
      } else if (position <= -500) { // check to see if we are shifting from near the end of carousel
        updatePos -= 100;
        setRightButton(false);
      } else {
        updatePos -= 250;
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

      <div style={updateStyle} className="flexRow">
        <div className="flexCol">
          <img src="https://a0.muscache.com/im/pictures/e68a0a87-e41a-489e-a03e-e11236d9b679.jpg?im_w=320" alt="Portland"/>
          <div className="portland">
            <h3>Portland</h3>
            <p>1 hour drive</p>
          </div>
        </div>

        <div className="flexCol">
          <img src="https://a0.muscache.com/im/pictures/7ab01178-6b05-4f14-8fcf-b989acb7a52c.jpg?im_w=320" alt="Seattle"/>
          <div className="seattle">
            <h3>Seattle</h3>
            <p>4.5 hour drive</p>
          </div>
        </div>

        <div className="flexCol">
          <img src="https://a0.muscache.com/im/pictures/aef20929-0d6a-40e7-8ac9-321ff0edf8c9.jpg?im_w=320" alt="Bend"/>
          <div className="bend">
            <h3>Bend</h3>
            <p>4.5 hour drive</p>
          </div>
        </div>

        <div className="flexCol">
          <img src="https://a0.muscache.com/im/pictures/b4e025ab-b353-41fb-814d-5e4f80571186.jpg?im_w=320" alt="Eugene"/>
          <div className="eugene">
            <h3>Eugene</h3>
            <p>3 hour drive</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NextTrip;
