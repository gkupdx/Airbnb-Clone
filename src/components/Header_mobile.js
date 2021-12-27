//// Header_mobile.js

import GiftCards from './GiftCards_mobile';

const Header = () => {
  return (
    <div className="header">
      <div className="heroImage">
        <div className="heroImageDiv">
          <h3>Not sure where to go?<br></br>Perfect.</h3>
          <button className="flexibleBtn"><p>I'm flexible</p></button>
        </div>
      </div>

      <GiftCards />
    </div>
  )
}

export default Header;
