//// NextTrip_mobile.js

import { useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';

const NextTrip = () => {
  const [clickable, setClickable] = useState(true);

  const chevronIconStyle = {
    fontSize: "18px"
  }

  const shiftRight = {
    if (clickable) {
      setClickable(false);
    }
  }

  return (
    <div className="nextTrip">
      <div className="flexRow">
        <div><h2>Inspiration for your next trip</h2></div>
        <div className="chevronBtns">
          <button className={clickable ? "notClickableBtn" : "clickableBtn"}><BiChevronLeft style={chevronIconStyle}/></button>
          <button onClick={shiftRight} className="clickableBtn"><BiChevronRight style={chevronIconStyle}/></button>
        </div>
      </div>

      <div className="flexRow">
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
