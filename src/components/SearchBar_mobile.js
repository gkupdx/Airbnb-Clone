//// SearchBar_mobile.js

import { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';

import TabletBar from './TabletBar';
import TabletBarSticky from './TabletBarSticky';

const SearchBar = () => {
  const [sticky, setSticky] = useState(true);
  const [tabletView, setTabletView] = useState(false);

  const searchIconStyle = {
    color: "red",
    fontSize: "18px",
    marginRight: "5px"
  }

  // Transition from fixed to "sticky" search bar on window scroll
  const stickySearchBar = () => {
    if (window.pageYOffset === 0) {
      setSticky(false);
    } else {
      setSticky(true);
    }
  }
    /* paired with 'stickySearchBar()' */
  useEffect(() => {
    stickySearchBar()
    window.addEventListener("scroll", stickySearchBar)
  });

  // Transition from MOBILE to TABLET search bar on window resize (dynamic)
  const tabletSearchBar = () => {
    if (window.innerWidth >= 800) {
      setTabletView(true);
    } else {
      setTabletView(false);
    }
  }

  useEffect(() => {
    tabletSearchBar()
    window.addEventListener("resize", tabletSearchBar)
  })

  return (
    <>
    {window.innerWidth < 800 ?
      // browser width LESS than 800px ---> display MOBILE search bar
      <div className={!sticky ? "fixedSearchBar" : "stickySearchBar"}>
        <button className={!sticky ? "searchBtn" : "searchBtn2"}><BiSearch style={searchIconStyle}/>Where are you going?</button>
      </div>
      :
      // browser width GREATER/EQUAL to 800px ---> display TABLET search bar
      <div className={!sticky ? "fixedSearchBar" : "stickySearchBar"}>
        {!sticky ? <TabletBar /> : <TabletBarSticky />}
      </div>
    }
    </>
  )
}

export default SearchBar;
