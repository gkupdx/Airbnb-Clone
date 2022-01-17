//// FooterBar_mobile.js

import { useState } from 'react';
import { BiSearch, BiHeart } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';

const FooterBar = ({ style }) => {
  const [explore, setExplore] = useState(true);
  const [wishlist, setWishlist] = useState(false);
  const [login, setLogin] = useState(false);

  const activeIconStyle = {
    color: "red",
    fontSize: "30px"
  }

  const inactiveIconStyle = {
    color: "#000",
    fontSize: "30px"
  }

  const toggleExplore = () => {
    if (!explore) {
      setExplore(!explore);
      if (login || wishlist) {
        setLogin(false);
        setWishlist(false);
      }
    }
  }

  const toggleWishlist = () => {
    if (!wishlist) {
      setWishlist(!wishlist);
      if (explore || login) {
        setExplore(false);
        setLogin(false);
      }
    }
  }

  const toggleLogin = () => {
    if (!login) {
      setLogin(!login);
      if (explore || wishlist) {
        setExplore(false);
        setWishlist(false);
      }
    }
  }

  return (
    <>
    {/* shows only if browser width is tablet view or below */}
    {window.innerWidth < 850 ?
      <div style={style} className="footerBarSticky">
        <div className="footerBarBtns">
          {explore ? <a onClick={toggleExplore} className="footerFlexCol activeFooterLink" href="#explore"><BiSearch style={activeIconStyle}/>Explore</a> : <a onClick={toggleExplore} className="footerFlexCol inactiveFooterLink" href="#explore"><BiSearch style={inactiveIconStyle}/>Explore</a>}
          {wishlist ? <a onClick={toggleWishlist} className="footerFlexCol activeFooterLink" href="#wishlist"><BiHeart style={activeIconStyle}/>Wishlists</a> : <a onClick={toggleWishlist} className="footerFlexCol inactiveFooterLink" href="#wishlist"><BiHeart style={inactiveIconStyle}/>Wishlists</a>}
          {login ? <a onClick={toggleLogin} className="footerFlexCol activeFooterLink" href="#login"><FaUserCircle style={activeIconStyle}/>Log in</a> : <a onClick={toggleLogin} className="footerFlexCol inactiveFooterLink" href="#login"><FaUserCircle style={inactiveIconStyle}/>Log in</a>}
        </div>
      </div>
      :
      ""
    }
    </>
  )
}

export default FooterBar;
